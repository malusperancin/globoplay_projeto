import { TitleRailData } from "./title-rail-data";
import style from "./style.module.scss";
import TitleCard from "../../cards/title-card/title-card";
import {
  calcTranslateScroll,
  useHorizontalScroll,
} from "../horizontal-navigation/horizontal-navigation";
import MediaInfoData from "../../media-info/media-info-data";
import { useEffect } from "react";
import { CARD_TITLE } from "../../../constants/constants";

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

  const translate = calcTranslateScroll(
    isFocused,
    foco,
    CARD_TITLE.NUM_CARD_SCREEN,
    CARD_TITLE.CARD_HEIGHT
  );

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
