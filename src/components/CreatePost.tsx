import React, { useState } from "react";
import profile from "../assets/profile/pfp1.png";
import Image from "next/image";

import clip from "../assets/create/clip.svg";
import exchange from "../assets/create/exchange.svg";
import hexagon from "../assets/sidebar/nftsPurple.svg";
import smile from "../assets/create/smile.svg";
import graph from "../assets/create/graph.svg";
import calendar from "../assets/create/calendar.svg";

const CreatePost = () => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    console.log("clicked");
  };

  const handlePost = () => {
    console.log(value);
  };

  const option = [
    {
      icon: clip,
      onclick: handleClick,
    },
    {
      icon: exchange,
      onclick: handleClick,
    },
    {
      icon: hexagon,
      onclick: handleClick,
    },
    {
      icon: smile,
      onclick: handleClick,
    },
    {
      icon: graph,
      onclick: handleClick,
    },
    {
      icon: calendar,
      onclick: handleClick,
    },
  ];

  return (
    <div className=" flex gap-2 w-full px-4 border-b border-gray-200 pt-2 pb-4">
      <Image
        src={profile}
        alt="profile"
        width={40}
        height={40}
        className="rounded-full h-10 w-10"
      />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handlePost();
        }}
        className="flex-grow"
      >
        <textarea
          placeholder="What's up?!"
          className="w-full p-2 focus:outline-none focus:ring-0 resize-none overflow-wrap-break-word min-h-[40px] placeholder:text-gray-500 placeholder:font-semibold"
          rows={1}
          style={{ overflow: "hidden" }}
          onChange={(e) => {
            e.target.style.height = "auto";
            e.target.style.height = e.target.scrollHeight + "px";
            setValue(e.target.value);
          }}
          value={value}
          required
        />

        <div className="flex px-2 items-center justify-between">
          <div className="flex gap-4 mt-6 ">
            {option.map((item, index) => {
              return (
                <Image
                  src={item.icon}
                  key={index}
                  alt="icon"
                  width={24}
                  height={24}
                  className="cursor-pointer h-6 w-6"
                  onClick={item.onclick}
                />
              );
            })}
          </div>

          <button
            disabled={!value}
            type="submit"
            className="bg-violet-600 text-white font-semibold px-4 py-1 rounded-full mt-4 disabled:opacity-50"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
