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
];

export default friends;
export type { Friend };
