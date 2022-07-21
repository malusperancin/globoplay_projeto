import { TitleRailData } from "./title-rail-data";
import style from "./style.module.scss";
import TitleCard from "../../cards/title-card/title-card";
import useHorizontalScroll from "../../horizontal-navigation/horizontal-navigation";

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
              translate={foco <= 14 ? foco * -189 : -189 * 14}
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
