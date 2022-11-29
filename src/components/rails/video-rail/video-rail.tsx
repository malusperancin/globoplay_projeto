import { memo, useEffect } from "react";
import { CARD_VIDEO } from "../../../constants/constants";
import VideoCard from "../../cards/video-card/video-card";
import MediaInfoType from "../../media-cover/components/media-info/media-info-type";
import VideoRailData from "./video-rail-type";
import {
  calcTranslateScroll,
  useHorizontalScroll,
} from "../horizontal-navigation/horizontal-navigation";

import style from "./video-rail.module.scss";

type Props = {
  data: VideoRailData;
  isFocused: boolean;
  onCardFocus: (info: MediaInfoType) => void;
  hide: boolean;
};
const VideoRail: React.FC<Props> = ({ data, isFocused, onCardFocus, hide }) => {
  const foco = useHorizontalScroll(data.cards.length);

  const translate = calcTranslateScroll(
    isFocused,
    foco,
    CARD_VIDEO.NUM_CARD_SCREEN,
    CARD_VIDEO.CARD_WIDTH
  );

  useEffect(() => {
    if (isFocused) {
      onCardFocus({ contentType: data.contentType, card: data.cards[foco] });
    }
  }, [isFocused, foco, data, onCardFocus]);

  if (hide) return <></>;

  return (
    <div>
      <p className={style.title}> {data.title} </p>
      <div className={style.rail}>
        {data.cards.map((i, index) => {
          return (
            <VideoCard
              key={index}
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

export default memo(VideoRail);
