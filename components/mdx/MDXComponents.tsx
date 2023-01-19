import WelcomeCard from "../WelcomeCard";
import BangumiCard from "./media/BangumiCard";
import Image from "./MyImage";
import Ezbg from "./Ezbg";
import QuoteComponent from "./Quote";
import DeletedData from "components/DeletedData";
import Border from "./Border";
import Table from "./Table";
import { PhotoProvider, PhotoView } from "react-photo-view";

const TableHeader = ({ children }: any) => {
  return (
    <th className="border-b p-4 pl-8 pt-0 pb-3 text-left font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
      {children}
    </th>
  );
};
const MDXComponents = {
  img: Image,
  PhotoProvider,
  PhotoView,
  // th: TableHeader,
  // table: Table,
  WelcomeCard,
  BangumiCard,
  Ezbg,
  QuoteComponent,
  DeletedData,
  Border,
};

export default MDXComponents;
