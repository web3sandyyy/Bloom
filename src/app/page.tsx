"use client";
import CreatePost from "@/components/CreatePost";
import Post from "@/components/Post";
import { useState } from "react";
import data from "../constants/postData";

export default function Home() {
  const [selectedTab, setSelectedTab] = useState("foryou");
  const [updateFeed, setUpdateFeed] = useState("foryou");

  return (
    <div className="min-h-[100dvh] w-full">
      <div className="flex p-4 w-full">
        <div className="bg-gray-100 rounded-full flex p-1 w-full text-center font-semibold relative">
          <p
            className={`rounded-full w-full p-1 duration-200 ${
              selectedTab == "foryou" ? "text-black" : "text-gray-500"
            }`}
            onClick={() => setSelectedTab("foryou")}
          >
            <span className="relative z-10">
              For you
              {updateFeed == "foryou" && (
                <span className="absolute top-1/2 -translate-y-1/2 -right-4 min-h-[6px] min-w-[6px] rounded-full bg-red-500 "></span>
              )}
            </span>
          </p>

          <p
            className={`rounded-full w-full p-1 duration-200 ${
              selectedTab == "following" ? "text-black" : "text-gray-500"
            }`}
            onClick={() => setSelectedTab("following")}
          >
            <span className="relative z-10">
              Following
              {updateFeed == "following" && (
                <span className="absolute top-1/2 -translate-y-1/2 -right-4 min-h-[6px] min-w-[6px] rounded-full bg-red-500 "></span>
              )}
            </span>
          </p>

          <div
            className={`${
              selectedTab == "following" ? "left-1/2" : ""
            } duration-200 min-h-[calc(100%-8px)] w-[calc(50%-4px)] absolute left-1 top-1 bg-gray-100 rounded-full bg-white `}
          ></div>
        </div>
      </div>

      <CreatePost />
      <div className="w-full">
        {
          data && data.length > 0 && data.map((item: any, index: number) => {
            return (
              <Post
                key={index}
                pfp={item.pfp}
                username={item.username}
                postedTime={item.postedTime}
                content={item.content}
                comment={item.comment}
                like={item.like}
                repost={item.repost}
                bookmark={item.bookmark}
                reach={item.reach}
              />
            );
          })
        }

      </div>
    </div>
  );
}
