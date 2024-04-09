"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const GoogleSignUp = () => {
  const { data: session } = useSession();

  return (
    <Button variant="outline" className="w-full space-x-2 text-lg"  onClick={() => signIn('google')}>
      <FcGoogle />
      <span>Google</span>
    </Button>
  );
};

export default GoogleSignUp;
