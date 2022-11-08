import metadata from "data/metaData";
import Image from "next/image";
import Link from "next/link";
import avatar from "public/profile.jpg";
import { EnvelopeIcon, RssIcon } from "@heroicons/react/24/outline";

function ProfileAvatar() {
  return (
    <Link href="/about">
      <a className="mt-3 mb-6 h-[80px] w-[80px] transition-all duration-[750ms] hover:rotate-[10deg] hover:scale-125 sm:mb-0 sm:h-[120px] sm:w-[120px]">
        <Image
          src={avatar}
          alt="Travis Road"
          // layout="fixed"
          // objectFit="cover"
          className="overflow-hidden rounded-full"
        />
      </a>
    </Link>
  );
}

const Logo = ({ children, url }: { children: any; url: string }) => {
  return (
    <a
      className=" rounded-lg p-1 ring-nord-11 transition-all hover:bg-nord-6 hover:ring-2 dark:hover:bg-nord-1/80"
      href={url}
    >
      {children}
    </a>
  );
};

function ProfileDetail() {
  return (
    <div>
      <h1 className="pl-2 pb-2 text-4xl font-bold tracking-tight">
        Travis Road
      </h1>
      <p className="text-lg">
        <span className="pl-3 opacity-80"> a byr at </span> BUPT
      </p>
      <div className="mt-5 flex gap-1">
        <Logo url="https://github.com/travisroad">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            className="h-6 w-6"
            width="32"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
            ></path>
          </svg>
        </Logo>
        <Logo url={`mailto: ${metadata.email}`}>
          <EnvelopeIcon className="h-6 w-6" />
        </Logo>
        <Logo url={`/feed/feed.xml`}>
          <RssIcon className="h-6 w-6" />
        </Logo>
      </div>
    </div>
  );
}

export default function WelcomeCard() {
  return (
    <div className="not-prose pt-4">
      <div className=" flex flex-col-reverse justify-between rounded-lg border-2 border-nord-5 bg-white p-4 font-sans dark:border-nord-2 dark:bg-nord-0 sm:flex-row sm:p-8">
        <ProfileDetail />
        <ProfileAvatar />
      </div>
    </div>
  );
}
