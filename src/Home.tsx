import { useState } from 'react';
import MediaInfo from './components/media-info/media-info';
import MediaInfoData from './components/media-info/media-info-data';
import VerticalScroll from './components/vertical-scroll/vertical-scroll';
import './Home.css';
import mock from './mocks/mock.json'

function Home() {

  const [mediaInfoData, setMediaInfoData] = useState<MediaInfoData | null>(null)
  console.log(mediaInfoData)
  return (
    <div className="App">
      <MediaInfo isVisible data={mediaInfoData}/>
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
