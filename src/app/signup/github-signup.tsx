"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import React from "react";
import { FaGithub } from "react-icons/fa";

const GithubSignUp = () => {
  const { data: session } = useSession();
//   if (session) {
//     return (
//       <>
//         Signed in as {session.user!.email} <br />
//         <button onClick={() => signOut()}>Sign out</button>
//       </>
//     );
//   }
  return (
    <Button variant="outline" className="w-full space-x-2 text-lg" onClick={() => signIn('github')}>
      <FaGithub />
      <span>Github</span>
    </Button>
  );
};

export default GithubSignUp;
