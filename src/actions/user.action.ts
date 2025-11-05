"use server";

import { prisma } from "@/lib/prisma";
import { auth, currentUser } from "@clerk/nextjs/server";

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
