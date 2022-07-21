import ChannelRailData from "./channel-rail-data";
import style from "./style.module.scss";
import ChannelCard from "../../cards/channel-card/channel-card";
import useHorizontalScroll from "../../horizontal-navigation/horizontal-navigation";

// constantes
const CARD_SIZE = 354;
const NUM_CARD_SCREEN = 14;

type Props = {
  data: ChannelRailData;
  isFocused: boolean;
};

const ChannelRail: React.FC<Props> = ({ data }) => {
  const foco = useHorizontalScroll(data.cards.length);

  return (
    <div>
      <p className={style.title}> Canais </p>
      <div className={style.rail}>
        {data.cards.map((i, index) => {
          return (
            <ChannelCard
              translate={
                foco <= NUM_CARD_SCREEN
                  ? foco * -CARD_SIZE
                  : -CARD_SIZE * NUM_CARD_SCREEN
              }
              isFocus={index === foco}
              data={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ChannelRail;
