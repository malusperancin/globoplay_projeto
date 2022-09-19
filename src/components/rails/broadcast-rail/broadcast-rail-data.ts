import BroadcastCardData from "../../cards/broadcast-card/broadcast-card-data";

interface BroadcastRailData {
  title: string;
  contentType: "BROADCAST";
  offerId: string;
  isVideo: boolean;
  playlistEnabled: boolean;
  cards: BroadcastCardData[];
  index: number;
}

export default BroadcastRailData;
