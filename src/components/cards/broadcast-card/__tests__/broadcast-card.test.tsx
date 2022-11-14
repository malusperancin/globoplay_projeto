/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-node-access */
import { render } from "@testing-library/react";
import BroadcastCardType from "../../../cards/broadcast-card/broadcast-card-type";
import BroadcastCard from "../broadcast-card";

describe("BroadcastCard", () => {
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

  const broadcastComponent = (
    <BroadcastCard data={cardLive} isFocus={true} translate={100} />
  );

  const broadcastNotLiveAndFocusComponent = (
    <BroadcastCard data={cardNotLive} isFocus={false} translate={100} />
  );

  it("should render without throwing an error", () => {
    const { container } = render(broadcastComponent);

    expect(container).toMatchSnapshot();
    expect(container).toBeTruthy();
  });

  it("should display live icon", () => {
    const { getByTestId } = render(broadcastComponent);

    const liveIcon =
      getByTestId("broadcast-card").getElementsByClassName("liveIcon")[0];

    expect(liveIcon).toBeTruthy();
  });

  it("should not display live icon", () => {
    const { getByTestId } = render(broadcastNotLiveAndFocusComponent);

    const liveIcon =
      getByTestId("broadcast-card").getElementsByClassName("liveIcon")[0];

    expect(liveIcon).toBeFalsy();
  });

  it("should be focus", () => {
    const { getByTestId } = render(broadcastComponent);
    const focus =
      getByTestId("broadcast-card").getElementsByClassName("buttonFocus")[0];

    expect(focus).toBeTruthy();
  });

  it("should not be focus", () => {
    const { getByTestId } = render(broadcastNotLiveAndFocusComponent);
    const focus =
      getByTestId("broadcast-card").getElementsByClassName("button")[0];

    expect(focus).toBeTruthy();
  });
});
