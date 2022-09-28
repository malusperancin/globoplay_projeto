import BroadcastCardType from "../../cards/broadcast-card/broadcast-card-type";

interface BroadcastRailData {
  title: string;
  contentType: "BROADCAST";
  offerId: string;
  isVideo: boolean;
  playlistEnabled: boolean;
  cards: BroadcastCardType[];
  index: number;
}

export default BroadcastRailData;
