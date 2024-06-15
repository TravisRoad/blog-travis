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
    description: "Connect the dots.",
  },
  {
    url: "https://mskclover.com",
    name: "叶子的花园",
    description: "靡不有初，鲜克有终",
    iconUrl: "/image/friends/mskclover.jpg",
  },
  {
    url: "https://blog.izfsk.top/",
    name: "白漠流霜",
    description: "izfsk 的博客",
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
