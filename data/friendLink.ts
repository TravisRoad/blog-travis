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
];

export default friends;
export type { Friend };
