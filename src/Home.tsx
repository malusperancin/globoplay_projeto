import { useState } from "react";
import MediaCover from "./components/media-cover/media-cover";
import MediaInfoData from "./components/media-cover/components/media-info/media-info-type";
import VerticalScroll from "./components/vertical-scroll/vertical-scroll";
import "./Home.css";
import mock from "./mocks/mock.json";

function Home() {
  const [mediaInfoData, setMediaInfoData] = useState<MediaInfoData | null>(
    null
  );
  return (
    <div className="App">
      <MediaCover isVisible data={mediaInfoData} />
      <VerticalScroll
        isFocused={true}
        mediaInfoHeight={555}
        onCardFocus={setMediaInfoData}
        rails={mock as any}
      />
    </div>
  );
}

export default Home;
