import React from "react";

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
import UserPicture from "./userpicture";
import {
  EllipsisVertical,
  SendHorizonal,
  Settings,
  Settings2,
} from "lucide-react";
import { Separator } from "../ui/separator";

const Chat = () => {
  const messages = [
    { message: "Hi, how can I help you today?" },
    { message: "Hey, I'm having trouble with my account." },
    { message: "What seems to be the problem?" },
    { message: "I can't log in." },
  ];
  return (
    <Card className="flex flex-col justify-between  w-full h-[calc(100vh-120px)]">
      <div className="flex flex-col h-full">
        <CardHeader className="flex flex-row justify-between items-center">
          <div className="flex flex-row justify-start items-start space-x-3">
            <UserPicture />
            <div className="flex flex-col">
              <CardTitle>ShopTalk Bot</CardTitle>
              <CardDescription>
                Ask anything about this product.
              </CardDescription>
            </div>
          </div>
          <Button size="icon" variant="ghost" className="rounded-full">
            <Settings size={20} />
          </Button>
        </CardHeader>
        <CardContent className="h-full">
          <Separator className="my-1" />
          <div className="space-y-2 h-full">
            {messages.map((msg, key) => (
              <div
                className="px-4 py-2 rounded-lg bg-secondary w-max"
                key={key}
              >
                {msg.message}
              </div>
            ))}
          </div>
        </CardContent>
      </div>
      <CardFooter className="flex justify-between space-x-2">
        <Input placeholder="Type your message..." />
        <Button size="icon" className="p-1">
          <SendHorizonal />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Chat;
