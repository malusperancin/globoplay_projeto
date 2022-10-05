import ChannelCardType from "../../cards/channel-card/channel-card-type";

interface ChannelRailType {
  title: string;
  contentType: "BROADCAST_CHANNEL";
  cards: ChannelCardType[];
  index: number;
}

export default ChannelRailType;
