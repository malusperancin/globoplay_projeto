/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-node-access */
import { sliceText } from "./../slice-text";
import getContentBrand from "./../get-content-brand";
import { isFullHD } from "./../get-resolution";

describe("Utils", () => {
  it("should slice the text", () => {
    expect(sliceText("test", 2)).toBe("te...");
  });

  it("should get a resolution brand", () => {
    expect(
      getContentBrand({
        format: "string",
        releaseYear: 2019,
        type: "string",
        headline: "string",
        subset: {
          slug: "string",
        },
        contentBrand: {
          id: "string",
          name: "string",
        },
        originalContent: true,
        genresNames: ["Drama", "Comédia"],
      })
    ).toBe("  Drama  Original Globoplay  2019  ");
  });
});
