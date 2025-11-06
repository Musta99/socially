"use server";

import { prisma } from "@/lib/prisma";
import { auth, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import toast from "react-hot-toast";

// Sync Clerk user to your database
export async function syncUser() {
  try {
    const { userId } = await auth();
    const user = await currentUser();

    if (!userId || !user) {
      return;
    }

    // check if user exists in your database
    const existingUser = await prisma.user.findUnique({
      where: { clerkId: userId },
    });

    if (existingUser) {
      return;
    }
    // create new user in your database
    const newUser = await prisma.user.create({
      data: {
        clerkId: userId,
        email: user.emailAddresses[0]?.emailAddress || "",
        name: `${user.firstName || ""} ${user.lastName || ""}`,
        username:
          user.username ?? user.emailAddresses[0].emailAddress.split("@")[0],
        avatarUrl: user.imageUrl,
      },
    });

    return newUser;
  } catch (error) {
    console.error("Error syncing user:", error);
  }
}

// Get user from your database by Clerk ID
export async function getUserByClerkId(clerkId: string) {
  try {
    return await prisma.user.findUnique({
      where: { clerkId },
      include: {
        _count: {
          select: {
            followers: true,
            following: true,
            posts: true,
          },
        },
      },
    });
  } catch (error) {
    console.error("Error fetching user by Clerk ID:", error);
  }
}

// Get user id from your database by username
export async function getDbUserId() {
  const { userId: clerkId } = await auth();
  if (!clerkId) return null;

  const user = await getUserByClerkId(clerkId);

  if (!user) throw new Error("User not found");

  return user.id;
}

// Get Random users for "Who to Follow" feature except the current user and users already followed
export async function getRandomUser() {
  const userId = await getDbUserId();
  if (!userId) return [];
  return await prisma.user.findMany({
    // where: {
    //   AND: [
    //     {
    //       id: { not: userId },
    //     },
    //     {
    //       followers: {
    //         none: {
    //           followerId: userId,
    //         },
    //       },
    //     },
    //   ],
    // },

    include: {
      _count: {
        select: {
          followers: true,
        },
      },
    },
  });
}

// Toggle follow/unfollow user
export async function toggleFollow(targetUserId: string) {
  try {
    const currentUserId = await getDbUserId();
    if (!currentUserId) throw new Error("User not authenticated");

    if (currentUserId === targetUserId) {
      toast.error("You cannot follow yourself.");
    }

    const existingFollow = await prisma.follows.findUnique({
      where: {
        followerId_followingId: {
          followerId: currentUserId,
          followingId: targetUserId,
        },
      },
    });

    // If already following, unfollow
    if (existingFollow) {
      await prisma.follows.delete({
        where: {
          followerId_followingId: {
            followerId: currentUserId,
            followingId: targetUserId,
          },
        },
      });
      toast.error("Successfully unfollowed the user!");
    } else {
      // If not following, create follow relationship
      await prisma.$transaction([
        prisma.follows.create({
          data: {
            followerId: currentUserId,
            followingId: targetUserId,
          },
        }),

        prisma.notification.create({
          data: {
            receiverId: targetUserId,
            type: "FOLLOW",
            creatorId: currentUserId,
          },
        }),
      ]);

      toast.success("Successfully followed the user!");
    }

    revalidatePath("/");

    return { success: true };
  } catch (error) {
    console.error("Error toggling follow:", error);
    return { success: false, message: "Error toggling follow" };
  }
}
