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

const MDXComponents = {
  img: Image,
  PhotoProvider,
  PhotoView,
  WelcomeCard,
  BangumiCard,
  Ezbg,
  QuoteComponent,
  Quote,
  DeletedData,
  Border,
  Dialog,
  DialogRight,
  Kbd,
  GptBlock,
  IframeWithLoading,
};

export default MDXComponents;
