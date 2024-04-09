import React from "react";
import { Separator } from "@/components/ui/separator";

const NotFound = () => {
  return (
    <div className="grid place-items-center h-full">
      <div className="flex flex-col justify-center items-center space-y-2">
        <span className="text-5xl">Error 404!</span>
        <Separator />
        <span className="text-sm">
          Sorry! your requested page doesn't exists.
        </span>
      </div>
    </div>
  );
};

export default NotFound;
