const metadata = {
  title: "Travis' Blog",
  description: "Travis' personal site about game, programing and movie",
  header: {
    logo: "Travis",
    sup: "Blog",
  },
  ICP: {
    url: "https://beian.miit.gov.cn/",
    code: "京ICP备20006389号-1",
  },
  time: {
    start: "2021",
    end: "2025",
  },
  author: "Travis Road",
  email: "lxymontage(at)gmail.com",
  // site: "https://blog-travis.vercel.app",
  site: "https://blog.lxythan2lxy.cn",
};

export const settings = {
  postPerPage: 10,
};

export const pageRouter: { url: string; name: string; nameEn: string }[] = [
  { url: "/", name: "主页", nameEn: "Home" },
  { url: "/posts", name: "文章", nameEn: "Posts" },
  { url: "/idea/1", name: "想法", nameEn: "Ideas" },
  { url: "/about", name: "关于", nameEn: "About" },
  { url: "/travelogue", name: "游记", nameEn: "story" },
  // { url: "https://www.travellings.cn/go.html", name: "开往", nameEn: "Travel" },
];

export default metadata;
