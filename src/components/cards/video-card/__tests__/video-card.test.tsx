/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-node-access */
import { render } from "@testing-library/react";
import VideoCardType from "../../video-card/video-card-type";
import VideoCard from "../video-card";

describe("VideoCard", () => {
  const card: VideoCardType = {
    UI_number: 0,
    availableFor: "teste",
    backgroundUrl: "teste",
    contentRating: "teste",
    contentRatingCriteria: [],
    description: "teste",
    duration: 20,
    episodeNumber: 21,
    formattedDuration: "teste",
    formattedRemainingTime: "teste",
    genresNames: [],
    headline: "teste",
    id: "teste",
    kind: "teste",
    liveThumbnail: "teste",
    logoUrl: "teste",
    posterUrl: "teste",
    seasonNumber: 3,
    selfRatedContent: true,
    technicalSpecs: {
      resolutions: [],
    },
    title: "teste",
    titleId: "teste",
    watchedPercent: 20,
    watchedProgress: 20,
  };

  const videoComponent = (
    <VideoCard data={card} isFocus={true} translate={100} />
  );

  const videoComponentNotFocus = (
    <VideoCard data={card} isFocus={false} translate={100} />
  );

  it("should render without throwing an error", () => {
    const { container } = render(videoComponent);

    expect(container).toMatchSnapshot();
    expect(container).toBeTruthy();
  });

  it("should be focus", () => {
    const { getByTestId } = render(videoComponent);
    const focus =
      getByTestId("video-card").getElementsByClassName("imageFocus")[0];

    expect(focus).toBeTruthy();
  });

  it("should not be focus", () => {
    const { getByTestId } = render(videoComponentNotFocus);
    const focus = getByTestId("video-card").getElementsByClassName("image")[0];

    expect(focus).toBeTruthy();
  });
});
