type ChannelCardType = {
  state: "title";
  id: string;
  backgroundUrl: string;
  description: string;
  logo: string;
  logoSelected: string;
  headline: string;
  contentType: string;
  cover: {
    landscape: string;
  };
};

export default ChannelCardType;
