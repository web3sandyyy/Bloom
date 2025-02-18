import Image from "next/image";
import React from "react";
import pfp1 from "../assets/profile/pfp1.png";
import pfp2 from "../assets/profile/pfp2.png";
import pfp3 from "../assets/profile/pfp3.png";
import purpleHexagon from "../assets/icons/purpleHexagon.svg";

const WhoToFollow = () => {
  const data = [
    {
      name: "meme_trader",
      username: "LoveMemes",
      pfp: pfp1,
      isOnline: true,
    },
    {
      name: "emilycarter",
      pfp: pfp2,
      username: "Emily Carter",
      isOnline: true,
    },
    {
      name: "ChingChong",
      pfp: pfp3,
      username: "Takumi Satoru",
      isOnline: false,
    },
  ];

  const ProfileCard = ({
    name,
    username,
    pfp,
    isOnline = false,
  }: {
    name: string;
    username: string;
    pfp: any;
    isOnline: boolean;
  }) => {
    return (
      <div className="flex items-center gap-2 justify-between">
        <div className="flex gap-2 items-center">
          <div className="relative">
            <Image
              src={pfp}
              alt={name}
              width={32}
              height={32}
              className="h-10 w-10 rounded-full"
            />
            {isOnline && (
              <Image
                src={purpleHexagon}
                alt="purpleHexagon"
                width={16}
                height={16}
                className="absolute bottom-0 -right-1 z-10 h-4 w-4"
              />
            )}
          </div>

          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-gray-500">{username}</p>
          </div>
        </div>
        <p className="text-sm text-primary font-semibold">Follow</p>
      </div>
    );
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <p className="text-xl font-bold">Who to follow</p>
        <p className="font-semibold text-gray-600">See all</p>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        {data.map((item, index) => (
          <ProfileCard
            key={index}
            name={item.name}
            username={item.username}
            pfp={item.pfp}
            isOnline={item.isOnline}
          />
        ))}
      </div>
    </div>
  );
};

export default WhoToFollow;
