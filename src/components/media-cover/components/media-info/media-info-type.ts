import BroadcastCardType from "../../../cards/broadcast-card/broadcast-card-type";
import CategoryCardType from "../../../cards/category-card/category-card-type";
import ChannelCardType from "../../../cards/channel-card/channel-card-type";
import TitleCardType from "../../../cards/title-card/title-card-type";
import VideoCardType from "../../../cards/video-card/video-card-type";

export type MediaInfoCategoryType = {
  contentType: "CATEGORY";
  card: CategoryCardType;
};

export type MediaInfoChannelType = {
  contentType: "BROADCAST_CHANNEL";
  card: ChannelCardType;
};

export type MediaInfoTitleType = {
  contentType: "TITLE";
  card: TitleCardType;
};

export type MediaInfoBroadcastType = {
  contentType: "BROADCAST";
  card: BroadcastCardType;
};

export type MediaInfoVideoType = {
  contentType: "VIDEO";
  card: VideoCardType;
};

type MediaInfoType =
  | MediaInfoCategoryType
  | MediaInfoChannelType
  | MediaInfoTitleType
  | MediaInfoBroadcastType
  | MediaInfoVideoType;

export default MediaInfoType;
