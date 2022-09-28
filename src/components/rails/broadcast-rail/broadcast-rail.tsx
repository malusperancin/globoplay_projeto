import { useEffect } from "react";
import { CARD_BROADCAST } from "../../../constants/constants";
import BroadcastCard from "../../cards/broadcast-card/broadcast-card";
import MediaInfoData from "../../media-cover/components/media-info/media-info-type";
import {
  calcTranslateScroll,
  useHorizontalScroll,
} from "../horizontal-navigation/horizontal-navigation";
import BroadcastRailData from "./broadcast-rail-data";
import style from "./broadcast-rail.module.scss";

type Props = {
  data: BroadcastRailData;
  isFocused: boolean;
  onCardFocus: (info: MediaInfoData) => void;
  hide: boolean;
};
const BroadcastRail: React.FC<Props> = ({
  data,
  isFocused,
  onCardFocus,
  hide,
}) => {
  const foco = useHorizontalScroll(data.cards.length);

  const translate = calcTranslateScroll(
    isFocused,
    foco,
    CARD_BROADCAST.NUM_CARD_SCREEN,
    CARD_BROADCAST.CARD_WIDTH
  );

  useEffect(() => {
    if (isFocused) {
      onCardFocus({ contentType: data.contentType, card: data.cards[foco] });
    }
  }, [isFocused, foco, data, onCardFocus]);

  if (hide) return <></>;

  return (
    <div>
      <p className={style.title}> Assista ao vivo </p>
      <div className={style.rail}>
        {data.cards.map((i, index) => {
          return (
            <BroadcastCard
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

export default BroadcastRail;
