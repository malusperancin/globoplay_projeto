import { CategoryRailData } from "../rails/category-rail/category-rail-data";
import { HighlightRailData } from "../rails/highlight-rail/highlight-rail-data";
import TitleRailData from "../rails/title-rail/title-rail-data";
import ChannelRailData from "../rails/channel-rail/channel-rail-data";
import CategoryCardType from "../cards/category-card/category-card-type";
import ChannelCardType from "../cards/channel-card/channel-card-type";
import BroadcastRailData from "../rails/broadcast-rail/broadcast-rail-data";
import BroadcastCardType from "../cards/broadcast-card/broadcast-card-type";
import TitleCardType from "../cards/title-card/title-card-type";

export type RailData =
  | CategoryRailData
  | ChannelRailData
  | TitleRailData
  | HighlightRailData
  | BroadcastRailData;
export type CardType =
  | CategoryCardType
  | ChannelCardType
  | TitleCardType
  | HighlightRailData
  | BroadcastCardType;
