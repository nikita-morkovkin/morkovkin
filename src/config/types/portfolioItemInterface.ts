import type {IIcon} from "./iconInterface.ts";

export interface IPortfolioItem {
  createTimeText: string;
  createTime: string;
  image: string;
  title: string;
  description: string;
  icons: IIcon[];
  link: string;
}