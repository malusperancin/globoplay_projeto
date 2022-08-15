import BroadcastCardData from "../cards/broadcast-card/broadcast-card-data";
import CategoryCardData from "../cards/category-card/category-card-data";
import ChannelCardData from "../cards/channel-card/channel-card-data";
import TitleCardData from "../cards/title-card/title-card-data";

export type MediaInfoCategoryData = {
  contentType: "CATEGORY";
  card: CategoryCardData;
};

export type MediaInfoChannelData = {
  contentType: "BROADCAST_CHANNEL";
  card: ChannelCardData;
};

export type MediaInfoTitleData = {
  contentType: "TITLE";
  card: TitleCardData;
};

export type MediaInfoBroadcastData = {
  contentType: "BROADCAST";
  card: BroadcastCardData;
};

type MediaInfoData =
  | MediaInfoCategoryData
  | MediaInfoChannelData
  | MediaInfoTitleData
  | MediaInfoBroadcastData;

export default MediaInfoData;
