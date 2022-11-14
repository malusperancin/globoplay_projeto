import { render } from "@testing-library/react";
import VerticalScroll from "./../vertical-scroll";
import mock from "../../../mocks/mock.json";

const verticalScroll = (
  <VerticalScroll
    isFocused={true}
    mediaInfoHeight={555}
    onCardFocus={jest.fn()}
    rails={mock as any}
  />
);

describe("Vertical Scroll", () => {
  it("should render without throwing an error", () => {
    const { container } = render(verticalScroll);

    expect(container).toMatchSnapshot();
    expect(container).toBeTruthy();
  });
});
