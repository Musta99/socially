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
      <h1>COntent goes here</h1>
    </>
  );
}
