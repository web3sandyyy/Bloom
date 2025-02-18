import React from "react";
import WhoToFollow from "./WhoToFollow";
import Top10MostCopied from "./Top10MostCopied";

const RightSidebar = () => {
  return (
    <div className="h-[100dvh] overflow-y-auto w-[30%] max-w-[450px] py-2 lg:pl-5 xl:pl-10  border-l-2 border-gray-100 hide-scrollbar">
      <WhoToFollow />
      <div className=" border-t-2 border-gray-100 w-[calc(100%-24px)] mx-3 my-2"></div>

      <Top10MostCopied />
    </div>
  );
};

export default RightSidebar;
