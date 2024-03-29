import Chatgpt from "assets/ChatGPT.svg";
import Image from "next/image";

export default function GptBlock({ children }: any) {
  return (
    <div className="relative rounded-lg border-2 border-[#beded9] bg-[#b2cec9] bg-opacity-30 px-4 py-1 dark:border-opacity-20 dark:bg-opacity-20">
      <div className="absolute -bottom-0 -right-0 flex-col opacity-40 dark:opacity-20">
        <Image src={Chatgpt} width={100} height={100} alt="idk" />
      </div>
      <div className="relative">
        <div className="">{children}</div>
      </div>
      <div className="z-5 absolute left-0 top-0 select-none pl-2 font-serif italic text-nord-7/40">
        Generated by ChatGPT
      </div>
    </div>
  );
}
