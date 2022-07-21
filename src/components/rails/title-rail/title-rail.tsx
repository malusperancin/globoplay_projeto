import { TitleRailData } from "./title-rail-data";
import style from "./style.module.scss";
import TitleCard from "../../cards/title-card/title-card";
import useHorizontalScroll from "../../horizontal-navigation/horizontal-navigation";

// constantes
const CARD_SIZE = 189;
const NUM_CARD_SCREEN = 14;

type Props = {
  data: TitleRailData;
  isFocused: boolean;
};

const TitleRail: React.FC<Props> = ({ data }) => {
  const foco = useHorizontalScroll(data.resources.length);

  return (
    <div className={style.container}>
      <p className={style.title}> Títulos </p>
      <div className={style.rail}>
        {data.resources.map((i, index) => {
          return (
            <TitleCard
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

export default TitleRail;
