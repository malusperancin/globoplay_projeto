import { memo, useEffect } from "react";
import ChannelRailType from "./channel-rail-type";
import ChannelCard from "../../cards/channel-card/channel-card";
import MediaInfoType from "../../media-cover/components/media-info/media-info-type";
import { CARD_CHANNEL } from "../../../constants/constants";
import {
  calcTranslateScroll,
  useHorizontalScroll,
} from "../horizontal-navigation/horizontal-navigation";

import style from "./channel-rail.module.scss";

type Props = {
  hide: boolean;
  data: ChannelRailType;
  isFocused: boolean;
  onCardFocus: (info: MediaInfoType) => void;
};

const ChannelRail: React.FC<Props> = ({
  data,
  isFocused,
  onCardFocus,
  hide,
}) => {
  const foco = useHorizontalScroll(data.cards.length);

  const translate = calcTranslateScroll(
    isFocused,
    foco,
    CARD_CHANNEL.NUM_CARD_SCREEN,
    CARD_CHANNEL.CARD_WIDTH
  );

  useEffect(() => {
    if (isFocused) {
      onCardFocus({ contentType: data.contentType, card: data.cards[foco] });
    }
  }, [isFocused, foco, data, onCardFocus]);

  if (hide) return <></>;

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

export default memo(ChannelRail);
