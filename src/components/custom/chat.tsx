"use client";
import React, { useEffect, useRef, useState } from "react";

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
import { SendHorizonal, Settings } from "lucide-react";

const Chat = () => {
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const msgScrollerRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState([
    { author: "bot", message: "Hi, how can I help you today?" },
    { author: "user", message: "Hey, I'm having trouble with my account." },
    { author: "bot", message: "What seems to be the problem?" },
    { author: "user", message: "I can't log in." },
  ]);
  useEffect(() => {
    // Scroll to the bottom when messages change
    // const product = localStorage.getItem("product");
    // setProductData(product);
    if (msgScrollerRef.current) {
      msgScrollerRef.current.scrollTop = msgScrollerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (inputValue.trim() === "") return;
    setLoading(true);
    try {
      setMessages((prev) => [
        ...prev,
        { author: "user", message: inputValue },
        // { author: "bot", message: "Thinking..." },
      ]);
      setInputValue("");

      // const full_prompt = `The product details are as follows:\n\n${productData}\n\nNow answer the question: ${inputValue}`;

      // const chatCompletion = await openai.chat.completions.create({
      //   messages: [{ role: "user", content: full_prompt }],
      //   model: "gpt-3.5-turbo",
      // });

      // setMessages((prev) => {
      //   const reply = chatCompletion.choices[0].message.content;
      //   // Replace the loading message with the actual reply
      //   const updatedMessages = [...prev];
      //   updatedMessages.pop(); // Remove the loading message
      //   return [...updatedMessages, { author: "bot", message: reply }];
      // });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row justify-between items-start">
        <div className="flex flex-row justify-start items-start space-x-3">
          <UserPicture />
          <div className="flex flex-col">
            <CardTitle>ShopTalk Bot</CardTitle>
            <CardDescription>Ask anything about this product.</CardDescription>
          </div>
        </div>
        <Button size="icon" variant="ghost" className="rounded-full">
          <Settings size={20} />
        </Button>
      </CardHeader>
      <CardContent>
        <div
          className="space-y-3 overflow-y-scroll h-[calc(100vh-380px)] max-h-[700px] min-h-[360px] no-scrollbar"
          ref={msgScrollerRef}
        >
          {messages.map((msg, key) => (
            <div className="w-full" key={key}>
              {msg.author === "bot" ? (
                <div className="flex justify-start w-full">
                  <div className="px-4 py-2 rounded-lg bg-secondary w-max">
                    {msg.message}
                  </div>
                </div>
              ) : (
                <div className="flex justify-end w-full">
                  <div className="px-4 py-2 rounded-lg bg-primary text-primary-foreground w-max">
                    {msg.message}
                  </div>
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex justify-start w-full">
              <div className="px-4 py-2 rounded-lg bg-secondary w-max">
                Huuuuuuuuuuuu
              </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between space-x-2">
        <Input
          value={inputValue}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          placeholder="Type your message..."
        />
        <Button size="icon" className="p-1" onClick={() => handleSend()}>
          <SendHorizonal />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Chat;
