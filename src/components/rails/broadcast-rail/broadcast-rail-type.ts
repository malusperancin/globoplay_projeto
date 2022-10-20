import BroadcastCardType from "../../cards/broadcast-card/broadcast-card-type";

interface BroadcastRailType {
  title: string;
  contentType: "BROADCAST";
  offerId: string;
  isVideo: boolean;
  cards: BroadcastCardType[];
  index: number;
}

export default BroadcastRailType;
