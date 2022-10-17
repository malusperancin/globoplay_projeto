import HighlightCardType from "../cards/highlight-card/highlight-card-type";

interface HighlightType {
  title: string;
  contentType: "OFFERHIGHLIGHT";
  cards: HighlightCardType[];
  index: number;
}

export default HighlightType;
