/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render } from "@testing-library/react";
import ChannelRail from "../channel-rail";
import ChannelRailType from "../channel-rail-type";
import ChannelCardType from "../../../cards/channel-card/channel-card-type";

describe("ChannelRail", () => {
  const cards: ChannelCardType[] = Array(10).map((_, index) => ({
    id: "teste",
    description: "teste",
    headline: "teste",
    logoSelected: "teste",
    logo: "teste",
    backgroundUrl: "teste",
  }));

  const list: ChannelRailType = {
    title: "teste",
    contentType: "BROADCAST_CHANNEL",
    index: 0,
    cards,
  };

  const channelComponent = (
    <ChannelRail
      data={list}
      isFocused={true}
      onCardFocus={jest.fn()}
      hide={false}
    />
  );

  const channelHideComponent = (
    <ChannelRail
      data={list}
      isFocused={true}
      onCardFocus={jest.fn()}
      hide={true}
    />
  );

  it("should render without throwing an error", () => {
    const { container } = render(channelComponent);

    expect(container).toMatchSnapshot();
    expect(container).toBeTruthy();
  });

  it("should hide component", () => {
    const { container } = render(channelHideComponent);
    expect(container).toBeEmptyDOMElement();
  });

  it("should match snapshot", () => {
    const { container } = render(channelHideComponent);
    expect(container).toBeEmptyDOMElement();
  });
});
