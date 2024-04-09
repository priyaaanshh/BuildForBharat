import Chat from "@/components/custom/chat";
import CustomCarousel from "@/components/custom/customCarousel";
import ProductPageDescription from "@/components/custom/productPageDescription";
import React from "react";

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <div className="flex flow-row justify-between items-start w-full gap-2">
      <div className="max-w-[700px] flex-1 ">
        <CustomCarousel />
        <ProductPageDescription />
      </div>
      <div className="max-w-[500px] flex-1 ">
        <Chat />
      </div>
    </div>
  );
};

export default Page;
