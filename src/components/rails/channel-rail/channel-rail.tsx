import ChannelRailData from "./channel-rail-data";
import style from "./style.module.scss";
import ChannelCard from "../../cards/channel-card/channel-card";
import {
  calcTranslateScroll,
  useHorizontalScroll,
} from "../horizontal-navigation/horizontal-navigation";
import MediaInfoData from "../../media-info/media-info-data";
import { useEffect } from "react";
import { CARD_CHANNEL } from "../../../constants/constants";

type Props = {
  hide: boolean;
  data: ChannelRailData;
  isFocused: boolean;
  onCardFocus: (info: MediaInfoData) => void;
  translateY: number;
};

const ChannelRail: React.FC<Props> = ({
  data,
  isFocused,
  onCardFocus,
  translateY,
  hide,
}) => {
  const styles = {
    transform: `translateY(${translateY}px)`,
  };

  const foco = useHorizontalScroll(data.cards.length);

  const translate = calcTranslateScroll(
    isFocused,
    foco,
    CARD_CHANNEL.NUM_CARD_SCREEN,
    CARD_CHANNEL.CARD_HEIGHT
  );

  useEffect(() => {
    if (isFocused) {
      onCardFocus({ contentType: data.contentType, card: data.cards[foco] });
    }
  }, [isFocused, foco, data, onCardFocus]);

  if (hide) return <></>;

  return (
    <div style={styles}>
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
