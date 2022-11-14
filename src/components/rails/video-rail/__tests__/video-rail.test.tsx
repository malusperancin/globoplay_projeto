/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render } from "@testing-library/react";
import VideoRail from "../video-rail";
import VideoRailType from "../video-rail-type";
import VideoCardType from "../../../cards/video-card/video-card-type";

describe("VideoRail", () => {
  const cards: VideoCardType[] = Array(10).map((_, index) => ({
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
  }));

  const list: VideoRailType = {
    title: "teste",
    contentType: "VIDEO",
    index: 0,
    cards,
  };

  const videoComponent = (
    <VideoRail
      data={list}
      isFocused={true}
      onCardFocus={jest.fn()}
      hide={false}
    />
  );

  const videoHideComponent = (
    <VideoRail
      data={list}
      isFocused={true}
      onCardFocus={jest.fn()}
      hide={true}
    />
  );

  it("should render without throwing an error", () => {
    const { container } = render(videoComponent);

    expect(container).toMatchSnapshot();
    expect(container).toBeTruthy();
  });

  it("should hide component", () => {
    const { container } = render(videoHideComponent);
    expect(container).toBeEmptyDOMElement();
  });

  it("should match snapshot", () => {
    const { container } = render(videoHideComponent);
    expect(container).toBeEmptyDOMElement();
  });
});
