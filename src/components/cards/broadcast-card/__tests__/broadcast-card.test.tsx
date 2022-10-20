/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-node-access */
import React from "react";
import { act, fireEvent, render } from "@testing-library/react";
import BroadcastCardType from "../../../cards/broadcast-card/broadcast-card-type";
import BroadcastCard from "../broadcast-card";

describe("BroadcastCard", () => {
  const simulateKeyRight = (element = window) => {
    fireEvent.keyDown(element, 40); // right 39  // down 40
  };

  const cardLive: BroadcastCardType = {
    id: "teste",
    subtitle: "teste",
    headline: "teste",
    title: "teste",
    posterUrl: "teste",
    backgroundUrl: "teste",
    selfRatedContent: true,
    contentRating: "teste",
    stringTime: "teste",
    progress: 0,
    broadcast: {
      isLive: true,
      channel: {
        __typename: "BroadcastChannel",
        name: "teste",
        logo: "teste",
        logoTrimmed: "teste",
        logoSelected: "teste",
      },
      mediaId: "teste",
      logo: "teste",
      logoSelected: "teste",
      media: {
        availableFor: "teste",
        serviceId: "teste",
      },
    },
    UI_number: 1,
    categories: [],
  };

  const cardNotLive: BroadcastCardType = {
    id: "teste",
    subtitle: "teste",
    headline: "teste",
    title: "teste",
    posterUrl: "teste",
    backgroundUrl: "teste",
    selfRatedContent: true,
    contentRating: "teste",
    stringTime: "teste",
    progress: 0,
    broadcast: {
      isLive: false,
      channel: {
        __typename: "BroadcastChannel",
        name: "teste",
        logo: "teste",
        logoTrimmed: "teste",
        logoSelected: "teste",
      },
      mediaId: "teste",
      logo: "teste",
      logoSelected: "teste",
      media: {
        availableFor: "teste",
        serviceId: "teste",
      },
    },
    UI_number: 0,
    categories: [],
  };

  const broadcastLiveComponent = (
    <BroadcastCard data={cardLive} isFocus={true} translate={100} index={0} />
  );

  const broadcastNotLiveComponent = (
    <BroadcastCard
      data={cardNotLive}
      isFocus={true}
      translate={100}
      index={0}
    />
  );

  it("should render without throwing an error", () => {
    const { container } = render(broadcastLiveComponent);
    expect(container).toBeTruthy();
  });

  it("should display live icon", () => {
    const { getByTestId } = render(broadcastLiveComponent);

    const liveIcon =
      getByTestId("broadcast-card-0").getElementsByClassName("liveIcon")[0];

    expect(liveIcon).toBeTruthy();
  });

  it("should not display live icon", () => {
    const { getByTestId } = render(broadcastNotLiveComponent);

    const liveIcon =
      getByTestId("broadcast-card-0").getElementsByClassName("liveIcon")[0];

    expect(liveIcon).toBeFalsy();
  });
});
