import { getPosts } from "@/actions/post.action";
import { getDbUserId } from "@/actions/user.action";
import CreatePost from "@/components/CreatePost";
import MoodToggle from "@/components/MoodToggle";
import PostCard from "@/components/PostCard";
import { Button } from "@/components/ui/button";
import WhoToFollow from "@/components/WhoToFollow";
import { prisma } from "@/lib/prisma";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { get } from "http";
import Image from "next/image";

export default async function Home() {
  const posts = await getPosts();
  const dbUser = await getDbUserId();

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-10 h-48 gap-6">
        {/* // Create post section and view posts section */}
        <div className="lg:col-span-6">
          <CreatePost />
          <div className="space-y-6">
            {posts?.map((post) => (
              <PostCard key={post.id} post={post} dbUserId={dbUser} />
            ))}
          </div>
        </div>

        {/* // Who to follow section */}
        <div className="hidden lg:block lg:col-span-4  sticky top-20">
          <WhoToFollow />
        </div>
      </div>
    </>
  );
}
