import { CategoryRailData } from "../rails/category-rail/category-rail-data";
import { HighlightRailData } from "../rails/highlight-rail/highlight-rail-data";
import TitleRailData from "../rails/title-rail/title-rail-data";
import ChannelRailData from "../rails/channel-rail/channel-rail-data";
import CategoryCardData from "../cards/category-card/category-card-data";
import ChannelCardData from "../cards/channel-card/channel-card-data";
import BroadcastRailData from "../rails/broadcast-rail/broadcast-rail-data";
import BroadcastCardData from "../cards/broadcast-card/broadcast-card-data";
import TitleCardData from "../cards/title-card/title-card-data";

export type RailData =
  | CategoryRailData
  | ChannelRailData
  | TitleRailData
  | HighlightRailData
  | BroadcastRailData;
export type CardData =
  | CategoryCardData
  | ChannelCardData
  | TitleCardData
  | HighlightRailData
  | BroadcastCardData;
