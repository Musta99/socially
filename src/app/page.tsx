import CreatePost from "@/components/CreatePost";
import MoodToggle from "@/components/MoodToggle";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";

export default async function Home() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-10 h-48 gap-6">
        {/* // Create post section */}
        <div className="lg:col-span-6">
          <CreatePost />
        </div>

        {/* // WHom to follow section */}
        <div className="hidden lg:block lg:col-span-4 bg-blue-600 h-48 sticky top-20">
          {" "}
          Whom to follow
        </div>
      </div>
    </>
  );
}
