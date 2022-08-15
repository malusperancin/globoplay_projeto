import TitleCardData from "../../cards/title-card/title-card-data";
export type TitleRailData = {
  __typename: string;
  title: string;
  contentType: "TITLE";
  resources: TitleCardData[];
  index: number;
};
