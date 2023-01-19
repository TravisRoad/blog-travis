import metadata from "data/metaData";
import Image from "next/image";
import Link from "next/link";
import avatar from "public/profile.jpg";
import { EnvelopeIcon, RssIcon } from "@heroicons/react/24/outline";

function ProfileAvatar() {
  return (
    <Link href="/about">
      <a className="mt-3 mb-6 h-[100px] w-[100px] transition-all duration-[750ms] hover:rotate-[10deg] hover:scale-125 sm:mb-0 sm:h-[120px] sm:w-[120px] ">
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
    <div className="relative">
      <div className="flex items-center gap-2">
        <h2 className="pl-2 text-2xl font-bold tracking-tight">Travis Road</h2>
        <svg
          viewBox="0 0 22 22"
          aria-label="认证账号"
          role="img"
          data-testid="icon-verified"
          className="inline h-5 w-5 cursor-pointer "
        >
          <g>
            <path
              clipRule="evenodd"
              d="M13.596 3.011L11 .5 8.404 3.011l-3.576-.506-.624 3.558-3.19 1.692L2.6 11l-1.586 3.245 3.19 1.692.624 3.558 3.576-.506L11 21.5l2.596-2.511 3.576.506.624-3.558 3.19-1.692L19.4 11l1.586-3.245-3.19-1.692-.624-3.558-3.576.506zM6 11.39l3.74 3.74 6.2-6.77L14.47 7l-4.8 5.23-2.26-2.26L6 11.39z"
              fill="url(#paint0_linear_8728_433881)"
              fillRule="evenodd"
            ></path>
            <path
              clipRule="evenodd"
              d="M13.348 3.772L11 1.5 8.651 3.772l-3.235-.458-.565 3.219-2.886 1.531L3.4 11l-1.435 2.936 2.886 1.531.565 3.219 3.235-.458L11 20.5l2.348-2.272 3.236.458.564-3.219 2.887-1.531L18.6 11l1.435-2.936-2.887-1.531-.564-3.219-3.236.458zM6 11.39l3.74 3.74 6.2-6.77L14.47 7l-4.8 5.23-2.26-2.26L6 11.39z"
              fill="url(#paint1_linear_8728_433881)"
              fillRule="evenodd"
            ></path>
            <path
              clipRule="evenodd"
              d="M6 11.39l3.74 3.74 6.197-6.767h.003V9.76l-6.2 6.77L6 12.79v-1.4zm0 0z"
              fill="#D18800"
              fillRule="evenodd"
            ></path>
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint0_linear_8728_433881"
                x1="4"
                x2="19.5"
                y1="1.5"
                y2="22"
              >
                <stop stopColor="#F4E72A"></stop>
                <stop offset=".539" stopColor="#CD8105"></stop>
                <stop offset=".68" stopColor="#CB7B00"></stop>
                <stop offset="1" stopColor="#F4EC26"></stop>
                <stop offset="1" stopColor="#F4E72A"></stop>
              </linearGradient>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint1_linear_8728_433881"
                x1="5"
                x2="17.5"
                y1="2.5"
                y2="19.5"
              >
                <stop stopColor="#F9E87F"></stop>
                <stop offset=".406" stopColor="#E2B719"></stop>
                <stop offset=".989" stopColor="#E2B719"></stop>
              </linearGradient>
            </defs>
          </g>
        </svg>
      </div>
      {/* <span className=" pl-[0.65rem] text-sm text-nord-3/50">
        Verified ($10/year for my website instead of $20/month)
      </span> */}
      <p className="my-4 text-lg">
        <span className="pl-3 opacity-80"> a byr at </span> BUPT
      </p>
      <div className=" mt-2 flex gap-1">
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
      <div className=" flex flex-row-reverse justify-between rounded-lg border-2 border-nord-5 bg-white p-4 font-sans dark:border-nord-2 dark:bg-nord-0 sm:flex-row sm:p-8">
        <ProfileDetail />
        <ProfileAvatar />
      </div>
    </div>
  );
}
