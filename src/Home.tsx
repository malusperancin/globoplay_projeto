import VerticalScroll from './components/vertical-scroll/vertical-scroll';
import './Home.css';
import mock from './mocks/mock.json'

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
