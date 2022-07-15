interface TitleCardData {
  titleId: string;
  headline: string;
  description: string;
  poster: {
    tv: string;
  };
  backgroundUrl: string;
  selfRatedContent: boolean;
  contentRating: string;
  labelContentRatingCriteria: string;
  type: string;
  technicalSpecs: {
    resolutions: string[];
  };
  UI_number: number;
  genresNames: string[];
}

export default TitleCardData;
