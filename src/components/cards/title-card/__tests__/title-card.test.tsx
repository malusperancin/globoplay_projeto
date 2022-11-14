/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-node-access */
import { render } from "@testing-library/react";
import TitleCardType from "../../title-card/title-card-type";
import TitleCard from "../title-card";

describe("TitleCard", () => {
  const card: TitleCardType = {
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
  };

  const titleComponent = (
    <TitleCard data={card} isFocus={true} translate={100} />
  );

  const titleComponentNotFocus = (
    <TitleCard data={card} isFocus={false} translate={100} />
  );

  it("should render without throwing an error", () => {
    const { container } = render(titleComponent);

    expect(container).toMatchSnapshot();
    expect(container).toBeTruthy();
  });

  it("should be focus", () => {
    const { getByTestId } = render(titleComponent);
    const focus =
      getByTestId("title-card").getElementsByClassName("buttonFocus")[0];

    expect(focus).toBeTruthy();
  });

  it("should not be focus", () => {
    const { getByTestId } = render(titleComponentNotFocus);
    const focus = getByTestId("title-card").getElementsByClassName("button")[0];

    expect(focus).toBeTruthy();
  });
});
