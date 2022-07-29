type CategoryCardData = {
  UI_number: number;
  backgroundUrl: string;
  posterUrl: string;
  headline: string;
  displayName?: string;
  id: string;
  navigation: {
    [key: string]: unknown;
  };
  cover: {
    landscape: string;
  };
};

export default CategoryCardData;
