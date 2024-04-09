import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Logo from "@/assets/images/shoptalk.png";
import Image from "next/image";

const Page = () => {
  return (
    <div className="grid place-items-center h-full">
      <Card className="w-full max-w-[450px]">
        <CardHeader className="flex flex-col items-center justify-center">
          <Image src={Logo} alt="" priority className="size-24" />
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Enter your username & password to login your account
          </CardDescription>
          <div className="w-full flex justify-center items-center gap-2 pt-2">
            <Button variant="outline" className="w-full space-x-2 text-lg">
              <FaGithub />
              <span>Github</span>
            </Button>
            <Button variant="outline" className="w-full space-x-2 text-lg">
              <FcGoogle />
              <span>Google</span>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-row justify-evenly items-center mb-4">
            <Separator className="w-1/5" />
            <span className="text-muted-foreground text-xs">
              OR CONTINUE WITH
            </span>
            <Separator className="w-1/5" />
          </div>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Username</Label>
                <Input
                  id="name"
                  name="name"
                  type="name"
                  placeholder="john_doe"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder=""
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col justify-center items-end space-y-1">
          <Button className="w-full">Continue</Button>
          <Link href="/signup" className="text-blue-600 px-2">
            Create new account
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Page;
