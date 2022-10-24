/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-node-access */
import { render } from "@testing-library/react";
import HighlightCardType from "../../highlight-card/highlight-card-type";
import HighlightCard from "../highlight-card";

describe("HighlightCard", () => {
  const card: HighlightCardType = {
    hasVideo: true,
    backgroundUrl: "teste",
    logoUrl: "teste",
    description: "teste",
    titleType: "teste",
    mediaId: true,
    titleId: "teste",
    type: "teste",
    broadcast: true,
    headline: "teste",
    headlineImage: "teste",
    serviceId: 20,
    idSalePage: "teste",
    position: 20,
  };

  const highlightComponent = <HighlightCard data={card} isFocus={true} />;

  const highlightComponentNotFocus = (
    <HighlightCard data={card} isFocus={false} />
  );

  it("should render without throwing an error", () => {
    const { container } = render(highlightComponent);

    expect(container).toMatchSnapshot();
    expect(container).toBeTruthy();
  });

  it("should be focus", () => {
    const { getByTestId } = render(highlightComponent);
    const focus =
      getByTestId("highlight-card").getElementsByClassName("buttonFocus")[0];

    expect(focus).toBeTruthy();
  });

  it("should not be focus", () => {
    const { getByTestId } = render(highlightComponentNotFocus);
    const focus =
      getByTestId("highlight-card").getElementsByClassName("button")[0];

    expect(focus).toBeTruthy();
  });
});
