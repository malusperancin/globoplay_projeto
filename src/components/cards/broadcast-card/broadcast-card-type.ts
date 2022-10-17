interface Broadcast {
  isLive: boolean;
  channel: Channel;
  mediaId: string;
  logo: string;
  logoSelected: string;
  media: Media;
}

interface Channel {
  __typename: string;
  name: string;
  logo: string;
  logoTrimmed: string;
  logoSelected: string;
}

interface Media {
  availableFor: string;
  serviceId: string;
}

interface BroadcastCardType {
  id: string;
  subtitle: string;
  headline: string;
  title: string;
  posterUrl: string;
  backgroundUrl: string;
  selfRatedContent: boolean;
  contentRating: string;
  stringTime: string;
  progress: number;
  broadcast: Broadcast;
  UI_number: number;
  categories: string[];
}

export default BroadcastCardType;
