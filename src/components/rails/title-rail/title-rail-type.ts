import TitleCardType from "../../cards/title-card/title-card-type";
interface TitleRailType {
  title: string;
  contentType: "TITLE";
  cards: TitleCardType[];
  index: number;
}

export default TitleRailType;
