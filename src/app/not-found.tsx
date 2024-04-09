import React from "react";
import { Separator } from "@/components/ui/separator";

const NotFound = () => {
  const heading = "Error 404!";
  const text = "Sorry! your requested page doesn't exists.";
  return (
    <div className="grid place-items-center h-full">
      <div className="flex flex-col justify-center items-center space-y-2">
        <span className="text-5xl">{heading}</span>
        <Separator className="bg-muted-foreground" />
        <span className="text-sm">{text}</span>
      </div>
    </div>
  );
};

export default NotFound;
