import VideoCardType from "../../cards/video-card/video-card-type";

interface VideoRailType {
  title: string;
  contentType: "VIDEO";
  cards: VideoCardType[];
  index: number;
}

export default VideoRailType;
