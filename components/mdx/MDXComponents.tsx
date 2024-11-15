import WelcomeCard from "../WelcomeCard";
import BangumiCard from "./media/BangumiCard";
import Image from "./MyImage";
import Ezbg from "./Ezbg";
import QuoteComponent from "./Quote";
import { Quote } from "./Quote";
import DeletedData from "components/DeletedData";
import Border from "./Border";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Dialog, DialogRight } from "./Dialog";
import Kbd from "./Kbd";
import GptBlock from "./GptBlock";
import IframeWithLoading from "./IframeWithLoading";
import MyLink from "./MyLink";
import Admonition from "./Admonition";

const MDXComponents: { [key: string]: any } = {
  img: Image,
  a: MyLink,
  PhotoProvider,
  PhotoView,
  WelcomeCard,
  BangumiCard,
  Ezbg, // easy bangumi?
  QuoteComponent,
  Quote,
  DeletedData,
  Border,
  Dialog,
  DialogRight,
  Kbd, // button key
  GptBlock,
  IframeWithLoading,
  Admonition,
};

export default MDXComponents;
