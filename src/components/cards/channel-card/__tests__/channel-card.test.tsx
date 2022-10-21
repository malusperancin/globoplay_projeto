/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-node-access */
import { render } from "@testing-library/react";
import ChannelCardType from "../../channel-card/channel-card-type";
import ChannelCard from "../channel-card";

describe("ChannelCard", () => {
  const card: ChannelCardType = {
    backgroundUrl: "teste",
    description: "teste",
    headline: "teste",
    id: "teste",
    logo: "teste",
    logoSelected: "teste",
  };

  const channelComponent = (
    <ChannelCard data={card} isFocus={true} translate={100} />
  );

  const channelComponentNotFocus = (
    <ChannelCard data={card} isFocus={false} translate={100} />
  );

  it("should render without throwing an error", () => {
    const { container } = render(channelComponent);

    expect(container).toMatchSnapshot();
    expect(container).toBeTruthy();
  });

  it("should be focus", () => {
    const { getByTestId } = render(channelComponent);
    const focus =
      getByTestId("channel-card").getElementsByClassName("buttonFocus")[0];

    expect(focus).toBeTruthy();
  });

  it("should not be focus", () => {
    const { getByTestId } = render(channelComponentNotFocus);
    const focus =
      getByTestId("channel-card").getElementsByClassName("button")[0];

    expect(focus).toBeTruthy();
  });
});
