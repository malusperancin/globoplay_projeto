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
  type: string;
  technicalSpecs: {
    resolutions: string[];
  };
  UI_number: number;
  genresNames: string[];
  cover: {
    landscape: string;
  };
  format: string;
  releaseYear: number;
  contentBrand: {
    trimmedLogo: string;
    name: string;
  };
  originalContent: boolean;
  subset: {
    slug: string;
  };
}

export default TitleCardData;
