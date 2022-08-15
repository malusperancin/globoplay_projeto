import { TitleRailData } from "./title-rail-data";
import style from "./style.module.scss";
import TitleCard from "../../cards/title-card/title-card";
import { useHorizontalScroll } from "../horizontal-navigation/horizontal-navigation";
import MediaInfoData from "../../media-info/media-info-data";
import { useEffect } from "react";

// constantes
const CARD_SIZE = 189;
const CARD_SIZE_HD = 126;
const NUM_CARD_SCREEN = 14;

type Props = {
  data: TitleRailData;
  isFocused: boolean;
  onCardFocus: (info: MediaInfoData) => void;
  translateY: number;
  hide: boolean;
};

const TitleRail: React.FC<Props> = ({
  data,
  isFocused,
  onCardFocus,
  translateY,
  hide,
}) => {
  const styles = {
    transform: `translateY(${translateY}px)`,
  };
  const foco = useHorizontalScroll(data.resources.length);

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

  useEffect(() => {
    if (isFocused) {
      onCardFocus({
        contentType: data.contentType,
        card: data.resources[foco],
      });
    }
  }, [isFocused, foco, data, onCardFocus]);

  if (hide) return <></>;

  return (
    <div style={styles} className={style.container}>
      <p className={style.title}> {data.title} </p>
      <div className={style.rail}>
        {data.resources.map((i, index) => {
          return (
            <TitleCard
              key={i.titleId}
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

export default TitleRail;
