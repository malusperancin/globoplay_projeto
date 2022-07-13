import VerticalScroll from './components/vertical-scroll/VerticalScroll';
import './Home.css';
import mock from './components/vertical-scroll/mock.json'

function Home() {
  return (
    <div className="App">
      <VerticalScroll 
        isFocused={true}
        mediaInfoHeight={555}
        onCardFocus={() => {
          console.log("a")
        }}
        rails={mock as any}
        />
    </div>
  );
}

export default Home;
