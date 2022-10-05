interface VideoCardType {
  UI_number: number;
  availableFor: string;
  backgroundUrl: string;
  contentRating: string;
  contentRatingCriteria: string[];
  description: string;
  duration: number;
  episodeNumber: number;
  formattedDuration: string;
  formattedRemainingTime: string;
  genresNames: string[];
  headline: string;
  id: string;
  kind: string;
  liveThumbnail: string;
  logoUrl: string;
  posterUrl: string;
  seasonNumber: number;
  selfRatedContent: boolean;
  technicalSpecs: {
    resolutions: string[];
  };
  title: string;
  titleId: string;
  watchedPercent: number;
  watchedProgress: number;
  cover: {
    landscape: string;
  };
}
export default VideoCardType;
