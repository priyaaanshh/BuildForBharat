import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import CustomCarousel from "./customCarousel";
import Link from "next/link";

const ProductCard = () => {
  const description = `Experience the iPhone 15 – your dynamic companion. Dynamic Island
  ensures you stay connected, bubbling up alerts seamlessly while you're
  busy. Its durable design features infused glass and aerospace-grade
  aluminum, making it dependable and resistant to water and dust.
  Capture life with precision using the 48 MP Main Camera, perfect for
  any shot. Powered by the A16 Bionic Processor, it excels in
  computational photography and more, all while conserving battery life.
  Plus, it's USB-C compatible, simplifying your charging needs. Elevate
  your tech game with the iPhone 15 – innovation at your fingertips.
  Goodbye cable clutter, hello convenience.`;
  return (
    <Card className="w-full max-w-[350px]">
      <CustomCarousel />
      <CardContent>
        <Link href="/product/400" className="space-y-2">
          <div className="flex flex-row justify-between items-start w-full space-x-2">
            <div className="flex flex-col justify-between items-start">
              <CardTitle className="text-lg">
                Apple iPhone 15 (Black, 128 GB)
              </CardTitle>
              <CardDescription className="text-primary font-semibold italic text-xs">
                Apple
              </CardDescription>
            </div>
            <div className="flex flex-col justify-between items-start">
              <CardTitle className="text-right text-lg">₹72,999</CardTitle>
              <CardDescription className=" text-right w-full text-xs">
                <s>₹79,900</s>
              </CardDescription>
            </div>
          </div>
          <div className="text-xs text-muted-foreground">
            {description.slice(0, 120)}
            {description.length > 120 ? "..." : ""}
          </div>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
