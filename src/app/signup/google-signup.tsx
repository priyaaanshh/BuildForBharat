import { Button } from "@/components/ui/button";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const GoogleSignUp = () => {
  return (
    <Button variant="outline" className="w-full space-x-2 text-lg">
      <FcGoogle />
      <span>Github</span>
    </Button>
  );
};

export default GoogleSignUp;
