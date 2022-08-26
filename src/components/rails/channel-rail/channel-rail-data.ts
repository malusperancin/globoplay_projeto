import ChannelCardData from "../../cards/channel-card/channel-card-data";

interface ChannelRailData {
  title: string;
  contentType: "BROADCAST_CHANNEL";
  cards: ChannelCardData[];
  index: number;
}

export default ChannelRailData;
