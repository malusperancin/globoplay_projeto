import TitleCardData from "../../cards/title-card/title-card-data";
interface TitleRailData {
  title: string;
  contentType: "TITLE";
  cards: TitleCardData[];
  index: number;
}

export default TitleRailData;
