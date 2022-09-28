import TitleRailData from "./title-rail-data";
import style from "./title-rail.module.scss";
import TitleCard from "../../cards/title-card/title-card";
import {
  calcTranslateScroll,
  useHorizontalScroll,
} from "../horizontal-navigation/horizontal-navigation";
import MediaInfoData from "../../media-cover/components/media-info/media-info-type";
import { useEffect } from "react";
import { CARD_TITLE } from "../../../constants/constants";

type Props = {
  data: TitleRailData;
  isFocused: boolean;
  onCardFocus: (info: MediaInfoData) => void;
  hide: boolean;
};

const TitleRail: React.FC<Props> = ({ data, isFocused, onCardFocus, hide }) => {
  const foco = useHorizontalScroll(data.cards.length);

  const translate = calcTranslateScroll(
    isFocused,
    foco,
    CARD_TITLE.NUM_CARD_SCREEN,
    CARD_TITLE.CARD_WIDTH
  );

  useEffect(() => {
    if (isFocused) {
      onCardFocus({
        contentType: data.contentType,
        card: data.cards[foco],
      });
    }
  }, [isFocused, foco, data, onCardFocus]);

  if (hide) return <></>;

  return (
    <div>
      <p className={style.title}> Titulo </p>
      <div className={style.rail}>
        {data.cards.map((i, index) => {
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
