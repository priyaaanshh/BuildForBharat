import React from "react";
import Loading from "./loading";

const Page = () => {
  if (1 === 1) return <Loading />;
  return (
    <div className="flex flex-col">
      <div>Hello</div>
    </div>
  );
};

export default Page;
