/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-node-access */
import { render } from "@testing-library/react";
import CategoryCardType from "../../category-card/category-card-type";
import CategoryCard from "../category-card";

describe("CategoryCard", () => {
  const card: CategoryCardType = {
    backgroundUrl: "teste",
    posterUrl: "teste",
    headline: "teste",
    id: "teste",
  };

  const categoryComponent = (
    <CategoryCard data={card} isFocus={true} translate={100} />
  );

  const categoryComponentNotFocus = (
    <CategoryCard data={card} isFocus={false} translate={100} />
  );

  it("should render without throwing an error", () => {
    const { container } = render(categoryComponent);

    expect(container).toMatchSnapshot();
    expect(container).toBeTruthy();
  });

  it("should be focus", () => {
    const { getByTestId } = render(categoryComponent);
    const focus =
      getByTestId("category-card").getElementsByClassName("buttonFocus")[0];

    expect(focus).toBeTruthy();
  });

  it("should not be focus", () => {
    const { getByTestId } = render(categoryComponentNotFocus);
    const focus =
      getByTestId("category-card").getElementsByClassName("button")[0];

    expect(focus).toBeTruthy();
  });
});
