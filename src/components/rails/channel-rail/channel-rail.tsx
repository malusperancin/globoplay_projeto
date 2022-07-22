import ChannelRailData from "./channel-rail-data";
import style from "./style.module.scss";
import ChannelCard from "../../cards/channel-card/channel-card";
import { useHorizontalScroll } from "../../horizontal-navigation/horizontal-navigation";

// constantes
const CARD_SIZE = 354;
const CARD_SIZE_HD = 237;
const NUM_CARD_SCREEN = 14;

type Props = {
  data: ChannelRailData;
  isFocused: boolean;
};

const ChannelRail: React.FC<Props> = ({ data, isFocused }) => {
    
  const foco = useHorizontalScroll(data.cards.length);

  var translate = 0;
  if (isFocused) {
    if (window.innerWidth >= 1920) {
      translate =
        foco <= NUM_CARD_SCREEN
          ? foco * -CARD_SIZE
          : -CARD_SIZE * NUM_CARD_SCREEN;
    } else {
      translate =
        foco <= NUM_CARD_SCREEN
          ? foco * -CARD_SIZE_HD
          : -CARD_SIZE_HD * NUM_CARD_SCREEN;
    }
  }

  return (
    <div>
      <p className={style.title}> Canais </p>
      <div className={style.rail}>
        {data.cards.map((i, index) => {
          return (
            <ChannelCard
               key={i.id}
              translate={translate}
              isFocus={isFocused ? index === foco : false}
              data={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ChannelRail;
