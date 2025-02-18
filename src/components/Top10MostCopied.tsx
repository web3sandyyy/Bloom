import React from "react";
import Image from "next/image";
import copy from "../assets/icons/copy.svg";
import data from "../constants/dataTop10";

import angleGreen from "../assets/icons/angleGreen.svg";
import angleRed from "../assets/icons/angleRed.svg";
import angle from "../assets/icons/angle.svg";

const Top10MostCopied = () => {

  const Card = ({
    rank,
    pfp,
    username,
    isBought,
    tokenIcon,
    tokenSymbol,
    amount,
    isMarketUp,
    percentage,
    copiedTimes,
  }: {
    rank: number;
    pfp: any;
    username: string;
    isBought: boolean;
    tokenIcon: any;
    tokenSymbol: string;
    amount: string;
    isMarketUp: boolean;
    percentage: string;
    copiedTimes: number;
  }) => {
    return (
      <div className="flex items-center gap-4 hover:bg-gray-100 duration-200 rounded-lg px-4 py-2">
        <p className="text-xl text-gray-600">#{rank}</p>

        <div className="flex-grow  ">
          <div className="flex gap-1 items-center text-gray-500">
            <Image
              src={pfp}
              alt={username}
              width={16}
              height={16}
              className="h-4 w-4 rounded-full"
            />
            <p>{username}</p>

            <p className="mx-2">{isBought ? "bought" : "sold"}</p>
            <Image
              src={tokenIcon}
              alt={tokenSymbol}
              width={16}
              height={16}
              className="h-4 w-4 rounded-full"
            />
            <p>{tokenSymbol}</p>
          </div>

          <div className="flex items-center gap-2">
            <p className=" font-semibold">
              {amount} {tokenSymbol}
            </p>

            <div className="flex items-center gap-1 ">
              <Image
                src={isMarketUp ? angleGreen : angleRed}
                alt="angle"
                width={12}
                height={12}
                className="h-3 w-3"
              />
              <p className="text-sm text-green-600 font-semibold">
                {percentage} %
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 hover:bg-gray-200 duration-200 rounded-full px-2 py-1">
          <p>{copiedTimes}</p>
          <Image src={copy} alt="copy" width={16} height={16} />
        </div>
      </div>
    );
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <p className="text-xl font-bold">Top 10 most copied</p>
        <p className="font-semibold text-gray-600">See TOP 100</p>
      </div>

      <div className="mt-4 flex flex-col gap-1">
        {data.map((item, index) => (
          <Card
            key={index}
            rank={index + 1}
            pfp={item.pfp}
            username={item.username}
            isBought={item.bought}
            tokenIcon={item.tokenIcon}
            tokenSymbol={item.tokenSymbol}
            amount={item.amount}
            isMarketUp={item.isMarketUp}
            percentage={item.percentage}
            copiedTimes={item.copiedTimes}
          />
        ))}
      </div>
    </div>
  );
};

export default Top10MostCopied;
