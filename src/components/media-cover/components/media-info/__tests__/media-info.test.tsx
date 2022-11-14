/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import MediaInfo from "../media-info";
import MediaInfoType from "../media-info-type";

const mock: MediaInfoType = {
  card: {
    backgroundUrl:
      "http://s2.glbimg.com/CTUVKaH8UAyDzA6yNDZWmVAADKc=/1280x720/filters:quality(40)/https://s2.glbimg.com/9lSn3h-fSHgG2sX9PJaSx1dp3dI=/https://i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2022/A/B/w3HJv6R32ElJ3lDkAGHg/2022-2881-sob-pressao-t5-destaque-foco-direita.jpg",
    description:
      "Novos episódios disponíveis! Na 5ª temporada, a saúde mental e física da equipe médica preocupa",
    hasVideo: false,
    broadcast: false,
    headline: "Sob Pressão",
    headlineImage:
      "http://s2.glbimg.com/LrVLlrMezNJ026waR0sgyQVQ13o=/0x110/https://s2.glbimg.com/uB9M8WyLrkLworWdYQFmF7MJ52s=/fit-in/0x364/filters:fill(transparent)/https://i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2022/N/3/KBN5XOSiAIl4MvuABTdg/2022-2881-sob-pressao-t5-logo-destaque.png",
    idSalePage: "globoplay-web",
    logoUrl:
      "http://s2.glbimg.com/LrVLlrMezNJ026waR0sgyQVQ13o=/0x110/https://s2.glbimg.com/uB9M8WyLrkLworWdYQFmF7MJ52s=/fit-in/0x364/filters:fill(transparent)/https://i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2022/N/3/KBN5XOSiAIl4MvuABTdg/2022-2881-sob-pressao-t5-logo-destaque.png",
    mediaId: false,
    position: 1,
    serviceId: 151,
    titleId: "PhQ7Wtzn6C",
    titleType: "SERIE",
    type: "TITLE",
  },
  contentType: "OFFERHIGHLIGHT",
};

const mediaInfoHighlight = <MediaInfo isVisible={true} info={mock} />;

describe("Media Info", () => {
  it("should render without throwing an error", () => {
    const { container } = render(mediaInfoHighlight);

    expect(container).toMatchSnapshot();
    expect(container).toBeTruthy();
  });

  it("should render a Highlight Media Info", () => {
    const { getByTestId } = render(mediaInfoHighlight);
    const mediaInfo = getByTestId("media-info-highlight");
    expect(mediaInfo).toBeTruthy();
  });
});
