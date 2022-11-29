import React, { memo, ReactNode, useEffect, useState } from "react";
import CategoryRail from "../rails/category-rail/category-rail";
import { RailType } from "./Types";
import ChannelRail from "../rails/channel-rail/channel-rail";
import TitleRail from "../rails/title-rail/title-rail";
import useNavigation from "../../hooks/use-navigation";
import style from "./vertical-scroll.module.scss";
import MediaInfoData from "../media-cover/components/media-info/media-info-type";
import BroadcastRail from "../rails/broadcast-rail/broadcast-rail";
import VideoRail from "../rails/video-rail/video-rail";
import Highlight from "../highlight/highlight";

type Props = {
  isFocused: boolean;
  mediaInfoHeight: number;
  rails: [];
  onCardFocus: (x: MediaInfoData | null) => void;
};

const VerticalScroll: React.FC<Props> = ({ rails, isFocused, onCardFocus }) => {
  const key = useNavigation();
  const [foco, setFocus] = useState(0);
  useEffect(() => {
    switch (key) {
      case "DOWN":
        if (isFocused && foco !== 0) {
          setFocus(foco - 1);
        }
        break;
      case "UP":
        if (isFocused && foco !== rails.length - 1) {
          setFocus(foco + 1);
        }
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const renderRails = (): ReactNode => {
    const allRails = rails as RailType[];
    return allRails.map((i, index) => {
      switch (i.contentType) {
        case "OFFERHIGHLIGHT":
          return (
            <Highlight
              key={index}
              data={i}
              isFocused={i.index === foco}
              onCardFocus={onCardFocus}
              hide={i.index < foco}
            />
          );
        case "VIDEO":
          return (
            <VideoRail
              key={index}
              data={i}
              isFocused={i.index === foco}
              onCardFocus={onCardFocus}
              hide={i.index < foco}
            />
          );
        case "TITLE":
          return (
            <TitleRail
              key={index}
              data={i}
              isFocused={i.index === foco}
              onCardFocus={onCardFocus}
              hide={i.index < foco}
            />
          );
        case "CATEGORY":
          return (
            <CategoryRail
              key={index}
              data={i}
              isFocused={i.index === foco}
              onCardFocus={onCardFocus}
              hide={i.index < foco}
            />
          );
        case "BROADCAST":
          return (
            <BroadcastRail
              key={index}
              data={i}
              isFocused={i.index === foco}
              onCardFocus={onCardFocus}
              hide={i.index < foco}
            />
          );
        case "BROADCAST_CHANNEL":
          return (
            <ChannelRail
              key={index}
              data={i}
              isFocused={i.index === foco}
              onCardFocus={onCardFocus}
              hide={i.index < foco}
            />
          );
        default:
          return <></>;
      }
    });
  };

  return <div className={style.rails}>{renderRails()}</div>;
};

export default memo(VerticalScroll);
