"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/bloomLogo.png";

import home from "../assets/sidebar/home.svg";
import homePurple from "../assets/sidebar/homePurple.svg";
import explore from "../assets/sidebar/explore.svg";
import explorePurple from "../assets/sidebar/explorePurple.svg";
import heart from "../assets/sidebar/heart.svg";
import heartPurple from "../assets/sidebar/heartPurple.svg";

import wallet from "../assets/sidebar/wallet.svg";
import walletPurple from "../assets/sidebar/walletPurple.svg";
import tokens from "../assets/sidebar/tokens.svg";
import tokensPurple from "../assets/sidebar/tokensPurple.svg";
import nft from "../assets/sidebar/nft.svg";
import nftPurple from "../assets/sidebar/nftsPurple.svg";

import earn from "../assets/sidebar/earn.svg";
import angle from "../assets/icons/angle.svg";
import hashtag from "../assets/sidebar/hashtag.svg";
import pfp from "../assets/profile/pfp1.png";
import fire from "../assets/sidebar/fire.svg";
import dots from "../assets/icons/dots.svg";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const LeftSidebar = () => {
  const [showChains, setShowChains] = useState(true);
  const [selectedIcon, setSelectedIcon] = useState("Home");

  const navItems = [
    {
      name: "Home",
      icon: home,
      selectedIcon: homePurple,
      href: "/",
    },
    {
      name: "Explore",
      icon: explore,

      selectedIcon: explorePurple,
      href: "/explore",
    },
    {
      name: "Notifications",
      icon: heart,
      selectedIcon: heartPurple,
      href: "/notifications",
    },
  ];

  const walletItems = [
    {
      name: "Wallet",
      icon: wallet,
      selectedIcon: walletPurple,
      href: "/wallet",
      value: "24,431.00",
    },
    {
      name: "Tokens",
      icon: tokens,
      selectedIcon: tokensPurple,
      href: "/tokens",
      value: "17,417.00",
    },
    {
      name: "NFT",
      icon: nft,
      selectedIcon: nftPurple,
      href: "/nft",
      value: "8,531.00",
    },
  ];

  const chains = [
    "Ethereum",
    "Polygon",
    "Arbitrum",
    "Optimism",
    "BSC",
    "Solana",
    "Near",
    "Terra",
    "Avalanche",
    "Fantom",
    "Harmony",
    "Heco",
  ];

  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="h-[100dvh] overflow-y-auto w-[30%] max-w-[450px] p-2 pb-0 lg:pr-5 xl:pr-10 border-r-2 border-gray-100 hide-scrollbar flex flex-col justify-between">
      <div className="">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            width={32}
            height={32}
            className="h-10 w-10 ml-3 mt-3"
          />
        </Link>

        <div className="mt-5 flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className=" hover:bg-gray-100 duration-200 rounded-full px-4 p-2 flex items-center gap-2"
            >
              <div className="flex items-center gap-4 cursor-pointer">
                <Image
                  src={pathname === item.href ? item.selectedIcon : item.icon}
                  alt={item.name}
                  width={24}
                  height={24}
                  className="h-7 w-7"
                />
                <p
                  className={`text-xl ${
                    pathname === item.href
                      ? "text-primary font-semibold"
                      : "text-black"
                  }`}
                >
                  {item.name}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className=" border-t-2 border-gray-100 w-[calc(100%-24px)] mx-3 my-2"></div>

        <div className="mt-2 flex flex-col gap-1">
          {walletItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className=" hover:bg-gray-100 duration-200 rounded-full px-4 p-2 flex items-center justify-between gap-2"
            >
              <div className="flex items-center gap-4 cursor-pointer">
                <Image
                  src={pathname === item.href ? item.selectedIcon : item.icon}
                  alt={item.name}
                  width={24}
                  height={24}
                  className="h-7 w-7"
                />
                <p
                  className={`text-xl ${
                    pathname === item.href
                      ? "text-primary font-semibold"
                      : "text-black"
                  }`}
                >
                  {item.name}
                </p>
              </div>
              <p className="text-gray-500 font-semibold">{item.value} USD</p>
            </Link>
          ))}
        </div>
        <div className=" border-t-2 border-gray-100 w-[calc(100%-24px)] mx-3 my-2"></div>

        <div className="flex items-center justify-between cursor-pointer hover:bg-gray-100 duration-200 rounded-full px-4 p-2">
          <div className="flex items-center gap-4">
            <Image
              src={earn}
              alt="earn"
              width={24}
              height={24}
              className="h-7 w-7"
            />
            <p className="text-xl">Earn</p>
          </div>

          <p className="text-xs bg-violet-600 text-white font-semibold rounded-full p-1 px-2 w-fit">
            Earn upto 300$
          </p>
        </div>

        <div className=" border-t border-gray-100 w-[calc(100%-24px)] mx-3 my-2"></div>

        <div className="pb-2">
          <div
            onClick={() => setShowChains(!showChains)}
            className="flex items-center gap-2 px-4"
          >
            <Image
              src={angle}
              alt="angle"
              width={20}
              height={20}
              className={`h-3 w-3 duration-200 ${
                showChains ? "rotate-180 " : ""
              }`}
            />
            <p className="text-sm text-gray-700">Chains</p>
          </div>

          <AnimatePresence>
            {showChains && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.2 }}
                className="mt-2 overflow-hidden"
              >
                {chains.map((chain, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 p-2 rounded-full hover:bg-gray-100 duration-200 cursor-pointer"
                  >
                    <Image
                      src={hashtag}
                      alt="hashtag"
                      width={20}
                      height={20}
                      className="h-6 w-6"
                    />

                    <p className="text-lg  font-semibold lowercase">{chain}</p>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="pb-4 pt-3 sticky bottom-0 bg-white">
        <div className=" border-t border-gray-100 w-[calc(100%-20px)] mx-auto"></div>
        <div className="px-4 py-2  flex items-center justify-between hover:bg-gray-100 duration-200 rounded-full  ">
          <div className="flex items-center gap-2">
            <Image
              src={pfp}
              alt="pfp"
              width={32}
              height={32}
              className="rounded-full h-8 w-8"
            />
            <p className="font-semibold">Olivia hayes</p>
          </div>

          <div className="flex items-center  ">
            <div className="flex items-center gap-2 hover:bg-orange-600/50 duration-200 px-3 py-1 rounded-full">
              <Image
                src={fire}
                alt="fire"
                width={20}
                height={20}
                className="h-5 w-5"
              />
              <p className="text-sm font-semibold tracking-widest text-orange-600">
                4/7
              </p>
            </div>

            <Image
              src={dots}
              alt="dots"
              width={20}
              height={20}
              className="h-6 w-6 p-1 opacity-70 hover:bg-gray-200 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
