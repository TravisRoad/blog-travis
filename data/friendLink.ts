interface Friend {
  url: string;
  name: string;
  description: string;
  iconUrl?: string;
}

const friends: Friend[] = [
  {
    url: "https://blog.riddma.com",
    name: "Ridd 的博客",
    description: "我的本科室友",
  },
  {
    url: "https://mskclover.com",
    name: "叶子的花园",
    description: "文章写的很有趣深刻的网友",
    iconUrl: "/image/friends/mskclover.jpg",
  },
  {
    url: "https://blog.izfsk.top/",
    name: "白漠流霜",
    description: "做的超棒的博客，审美在线，认同他的很多观点",
    iconUrl: "/image/friends/izfsk.ico",
  },
  {
    name: "Moreality's Blog",
    description: "The singularity is nearer.",
    url: "https://blog.roccoshi.top",
    iconUrl: "/image/friends/moreality.webp",
  },
];

export default friends;
export type { Friend };
