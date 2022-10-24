/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render } from "@testing-library/react";
import TitleRail from "../title-rail";
import TitleRailType from "../title-rail-type";
import TitleCardType from "../../../cards/title-card/title-card-type";

describe("TitleRail", () => {
  const cards: TitleCardType[] = Array(10).map((_, index) => ({
    titleId: "teste",
    headline: "teste",
    description: "teste",
    poster: {
      tv: "teste",
    },
    backgroundUrl: "teste",
    selfRatedContent: true,
    contentRating: "teste",
    type: "teste",
    technicalSpecs: {
      resolutions: [],
    },
    genresNames: [],
    format: "teste",
    releaseYear: 2022,
    contentBrand: {
      trimmedLogo: "teste",
      name: "teste",
    },
    originalContent: true,
    subset: {
      slug: "teste",
    },
  }));

  const list: TitleRailType = {
    title: "teste",
    contentType: "TITLE",
    index: 0,
    cards,
  };

  const titleComponent = (
    <TitleRail
      data={list}
      isFocused={true}
      onCardFocus={jest.fn()}
      hide={false}
    />
  );

  const titleHideComponent = (
    <TitleRail
      data={list}
      isFocused={true}
      onCardFocus={jest.fn()}
      hide={true}
    />
  );

  it("should render without throwing an error", () => {
    const { container } = render(titleComponent);

    expect(container).toMatchSnapshot();
    expect(container).toBeTruthy();
  });

  it("should hide component", () => {
    const { container } = render(titleHideComponent);
    expect(container).toBeEmptyDOMElement();
  });

  it("should match snapshot", () => {
    const { container } = render(titleHideComponent);
    expect(container).toBeEmptyDOMElement();
  });
});
