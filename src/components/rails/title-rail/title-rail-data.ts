import TitleCardData from "../../cards/title-card/title-card-data";

interface Navigation {
  __typename: string;
  UI_typename: string;
  identifier: string;
}

export type TitleRailData = {
  __typename: string;
  title: string;
  contentType: "TITLE";
  uiDefinitions: {
    height: number;
    isVerticalCentered?: boolean;
    hasMediaCover?: boolean;
  };
  offerId: string;
  isVideo: boolean;
  playlistEnabled: boolean;
  resources: TitleCardData[];
  index: number;
  navigation: Navigation;
};
