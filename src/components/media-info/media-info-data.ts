import BroadcastCardData from "../cards/broadcast-card/broadcast-card-data";
import CategoryCardData from "../cards/category-card/category-card-data";
import ChannelCardData from "../cards/channel-card/channel-card-data";
import TitleCardData from "../cards/title-card/title-card-data";
import BROADCAST_RAIL_CONSTANTS from "../rails/broadcast-rail/broadcast-rail-constants";
import CATEGORY_RAIL_CONSTANTS from "../rails/category-rail/category-rail-constants";
import CHANNEL_RAIL_CONSTANTS from "../rails/channel-rail/channel-rail-constants";
import TITLE_RAIL_CONSTANTS from "../rails/title-rail/title-rail-constants";

export type MediaInfoCategoryData = {
  contentType: typeof CATEGORY_RAIL_CONSTANTS.CONTENT_TYPE;
  card: CategoryCardData;
};

export type MediaInfoChannelData = {
  contentType: typeof CHANNEL_RAIL_CONSTANTS.CONTENT_TYPE;
  card: ChannelCardData;
};

export type MediaInfoTitleData = {
  contentType: typeof TITLE_RAIL_CONSTANTS.CONTENT_TYPE;
  card: TitleCardData;
};

export type MediaInfoBroadcastData = {
  contentType: typeof BROADCAST_RAIL_CONSTANTS.CONTENT_TYPE;
  card: BroadcastCardData;
};

type MediaInfoData =
  | MediaInfoCategoryData
  | MediaInfoChannelData
  | MediaInfoTitleData
  | MediaInfoBroadcastData;

export default MediaInfoData;
