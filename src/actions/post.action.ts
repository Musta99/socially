"use server";

import { prisma } from "@/lib/prisma";
import { getDbUserId } from "./user.action";
import { revalidatePath } from "next/cache";

export async function createPost(content: string, imageUrl: string) {
  try {
    const userId = await getDbUserId();
    if (!userId) {
      throw new Error("User not authenticated");
    }
    const newPost = await prisma.post.create({
      data: {
        content,
        imageUrl,
        authorId: userId,
      },
    });

    revalidatePath("/");

    return {
      success: true,
      data: newPost,
    };
  } catch (error) {
    console.error("Error creating post:", error);
  }
}
