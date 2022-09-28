import CategoryCardType from "../../cards/category-card/category-card-type";

export type CategoryRailData = {
  title: string;
  contentType: "CATEGORY";
  cards: CategoryCardType[];
  index: number;
};
