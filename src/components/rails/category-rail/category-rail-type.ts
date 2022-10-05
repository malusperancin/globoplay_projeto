import CategoryCardType from "../../cards/category-card/category-card-type";

export type CategoryRailType = {
  title: string;
  contentType: "CATEGORY";
  cards: CategoryCardType[];
  index: number;
};
