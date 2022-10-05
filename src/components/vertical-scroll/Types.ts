import { CategoryRailType } from "../rails/category-rail/category-rail-type";
import { HighlightRailData } from "../rails/highlight-rail/highlight-rail-data";
import TitleRailType from "../rails/title-rail/title-rail-type";
import ChannelRailType from "../rails/channel-rail/channel-rail-type";
import CategoryCardType from "../cards/category-card/category-card-type";
import ChannelCardType from "../cards/channel-card/channel-card-type";
import BroadcastRailType from "../rails/broadcast-rail/broadcast-rail-type";
import BroadcastCardType from "../cards/broadcast-card/broadcast-card-type";
import TitleCardType from "../cards/title-card/title-card-type";
import VideoCardType from "../cards/video-card/video-card-type";
import VideoRailType from "../rails/video-rail/video-rail-type";

export type RailType =
  | CategoryRailType
  | ChannelRailType
  | TitleRailType
  | HighlightRailData
  | BroadcastRailType
  | VideoRailType;
export type CardType =
  | CategoryCardType
  | ChannelCardType
  | TitleCardType
  | HighlightRailData
  | BroadcastCardType
  | VideoCardType;
