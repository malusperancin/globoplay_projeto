/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-node-access */
import { render } from "@testing-library/react";
import HighlightRail from "../highlight";
import HighlightRailType from "../highlight-type";
import HighlightCardType from "../../cards/highlight-card/highlight-card-type";

describe("HighlightRail", () => {
  const cards: HighlightCardType[] = Array(10).map((_, index) => ({
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
  }));

  const list: HighlightRailType = {
    title: "teste",
    contentType: "OFFERHIGHLIGHT",
    index: 0,
    cards,
  };

  const highlightComponent = (
    <HighlightRail
      data={list}
      isFocused={true}
      onCardFocus={jest.fn()}
      hide={false}
    />
  );

  const highlightHideComponent = (
    <HighlightRail
      data={list}
      isFocused={true}
      onCardFocus={jest.fn()}
      hide={true}
    />
  );

  it("should render without throwing an error", () => {
    const { container } = render(highlightComponent);

    expect(container).toMatchSnapshot();
    expect(container).toBeTruthy();
  });

  it("should hide component", () => {
    const { container } = render(highlightHideComponent);
    expect(container).toBeEmptyDOMElement();
  });

  it("should match snapshot", () => {
    const { container } = render(highlightHideComponent);
    expect(container).toBeEmptyDOMElement();
  });
});
