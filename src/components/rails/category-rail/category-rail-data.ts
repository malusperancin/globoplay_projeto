import CategoryCardData from "../../cards/category-card/category-card-data";

export type CategoryRailData = {
  title: string;
  contentType: "CATEGORY";
  cards: CategoryCardData[];
  index: number;
};
