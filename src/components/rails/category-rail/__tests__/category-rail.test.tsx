/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render } from "@testing-library/react";
import CategoryRail from "../category-rail";
import { CategoryRailType } from "../category-rail-type";
import CategoryCardType from "../../../cards/category-card/category-card-type";

describe("CategoryRail", () => {
  const cards: CategoryCardType[] = Array(10).map((_, index) => ({
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
    category: {
      isLive: true,
      channel: {
        __typename: "CategoryChannel",
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

  const list: CategoryRailType = {
    title: "teste",
    contentType: "CATEGORY",
    index: 0,
    cards,
  };

  const categoryComponent = (
    <CategoryRail
      data={list}
      isFocused={true}
      onCardFocus={jest.fn()}
      hide={false}
    />
  );

  const categoryHideComponent = (
    <CategoryRail
      data={list}
      isFocused={true}
      onCardFocus={jest.fn()}
      hide={true}
    />
  );

  it("should render without throwing an error", () => {
    const { container } = render(categoryComponent);

    expect(container).toMatchSnapshot();
    expect(container).toBeTruthy();
  });

  it("should hide component", () => {
    const { container } = render(categoryHideComponent);
    expect(container).toBeEmptyDOMElement();
  });

  it("should match snapshot", () => {
    const { container } = render(categoryHideComponent);
    expect(container).toBeEmptyDOMElement();
  });
});
