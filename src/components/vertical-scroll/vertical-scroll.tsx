import React, { ReactNode, useEffect, useState } from "react";
import CategoryRail from "../rails/category-rail/category-rail";
import { RailData } from "./Types";
import ChannelRail from "../rails/channel-rail/channel-rail";
import TitleRail from "../rails/title-rail/title-rail";
import useNavigation from "../cards/navigation/use-navigation";
import style from "./vertical-scroll.module.scss";
import MediaInfoData from "../media-info/media-info-data";
import BroadcastRail from "../rails/broadcast-rail/broadcast-rail";

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
        if (isFocused && foco !== rails.length) {
          setFocus(foco + 1);
        }
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const renderRails = (): ReactNode => {
    const allRails = rails as RailData[];
    return allRails.map((i, index) => {
      switch (i.contentType) {
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

export default VerticalScroll;
