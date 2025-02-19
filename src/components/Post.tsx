import React from "react";
import Image from "next/image";
import dots from "../assets/icons/dots.svg";

import likeIcon from "../assets/post/like.svg";
import commentIcon from "../assets/post/comment.svg";
import repostIcon from "../assets/post/repost.svg";
import bookmarkIcon from "../assets/post/bookmark.svg";
import boughtIcon from "../assets/post/bought.svg";
import soldIcon from "../assets/post/sold.svg";
import mintedIcon from "../assets/post/minted.svg";
import copyPurple from "../assets/post/copyPurple.svg";
import reachIcon from "../assets/post/reach.svg";

type PostType = {
  pfp: any;
  username: string;
  postedTime: string;
  content: string;
  comment: number;
  like: number;
  repost: number;
  bookmark: number;
  reach: number;
};

const Post = ({ pfp, username, postedTime, content, comment, like, repost, bookmark, reach }: PostType) => {
  return (
    <div className="w-full flex gap-2 p-2">
      <Image
        src={pfp}
        alt="pfp"
        width={48}
        height={48}
        className="rounded-full h-12 w12"
      />

      <div className="flex-grow">
        <div className="flex items-center justify-between gap-4">
          <div className=" flex items-center gap-2">
            <p className="font-semibold ">{username}</p>
            <p className="text-gray-600 text-sm">{postedTime}</p>
          </div>

          <Image
            src={dots}
            alt="dots"
            width={16}
            height={16}
            className="h-4 w-4 opacity-70"
          />
        </div>

        <div>{content}</div>

        <div className="mt-4 flex items-center justify-between ">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1">
              <Image
                src={commentIcon}
                alt="comment"
                className="h-4  w-4 opacity-70"
              />
              <p className="text-gray-600 text-sm font-semibold">{comment}</p>
            </div>
            <div className="flex items-center gap-1">
              <Image
                src={likeIcon}
                alt="like"
                className="h-4  w-4 opacity-70"
              />
              <p className="text-gray-600 text-sm font-semibold">{like}</p>
            </div>
            <div className="flex items-center gap-1">
              <Image
                src={repostIcon}
                alt="repost"
                className="h-4  w-4 opacity-70"
              />
              <p className="text-gray-600 text-sm font-semibold">{repost}</p>
            </div>
            <div className="flex items-center gap-1">
              <Image
                src={bookmarkIcon}
                alt="bookmark"
                className="h-4  w-4 opacity-70"
              />
              <p className="text-gray-600 text-sm font-semibold">{bookmark}</p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <Image
              src={reachIcon}
              alt="reach"
              className="h-4  w-4 opacity-70"
            />
            <p className="text-gray-600 text-sm font-semibold">{reach}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
