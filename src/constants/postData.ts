import pfp1 from "../assets/profile/pfp1.png";
import pfp2 from "../assets/profile/pfp2.png";
import pfp3 from "../assets/profile/pfp3.png";

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

const data: PostType[] = [
  {
    pfp: pfp1,
    username: "jango",
    postedTime: "15min",
    content: "fsdf sd fs f sf sdf sf s fs f sd fs",
    comment: 12338,
    like: 4234,
    repost: 22,
    bookmark: 34,
    reach: 3423,
  },
];

export default data;
