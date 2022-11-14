/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render } from "@testing-library/react";
import BroadcastRail from "../broadcast-rail";
import BroadcastRailType from "../broadcast-rail-type";
import BroadcastCardType from "../../../cards/broadcast-card/broadcast-card-type";

describe("BroadcastRail", () => {
  const cards: BroadcastCardType[] = Array(10).map((_, index) => ({
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
    UI_number: index,
    categories: [],
  }));

  const list: BroadcastRailType = {
    title: "teste",
    contentType: "BROADCAST",
    offerId: "teste",
    isVideo: true,
    index: 0,
    cards,
  };

  const broadcastComponent = (
    <BroadcastRail
      data={list}
      isFocused={true}
      onCardFocus={jest.fn()}
      hide={false}
    />
  );

  const broadcastHideComponent = (
    <BroadcastRail
      data={list}
      isFocused={true}
      onCardFocus={jest.fn()}
      hide={true}
    />
  );

  it("should render without throwing an error", () => {
    const { container } = render(broadcastComponent);

    expect(container).toMatchSnapshot();
    expect(container).toBeTruthy();
  });

  it("should hide component", () => {
    const { container } = render(broadcastHideComponent);
    expect(container).toBeEmptyDOMElement();
  });
});
