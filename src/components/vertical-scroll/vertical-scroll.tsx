import React, { ReactNode, useEffect, useState } from "react";
import CategoryRail from "../rails/category-rail/category-rail";
import { RailData } from "./Types";
import ChannelRail from "../rails/channel-rail/channel-rail";
import TitleRail from "../rails/title-rail/title-rail";
import OfHighlightRail from "../rails/highlight-rail/highlight-rail";
import useNavigation from "../cards/navigation/use-navigation";
import style from "./style.module.scss";
import MediaInfoData from "../media-info/media-info-data";
import { isFullHD } from "../../utils/get-resolution";

type Props = {
  isFocused: boolean;
  mediaInfoHeight: number;
  rails: [];
  onCardFocus: (x: MediaInfoData | null) => void;
};

const VerticalScroll: React.FC<Props> = ({ rails, isFocused, onCardFocus }) => {
  const passoTitle = isFullHD() ? -50 : -90;
  const passoChannel = isFullHD() ? -100 : -170;

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
    // eslint-disable-next-line array-callback-return
    return allRails.map((i, index) => {
      switch (i.contentType) {
        // case "CATEGORY":
        //   return <CategoryRail key={index} data={i} translateY={index * 100} isFocused={i.index === foco} onCardFocus={onCardFocus}/>;
        case "BROADCAST_CHANNEL":
          return (
            <ChannelRail
              key={index}
              data={i}
              translateY={foco * passoChannel}
              isFocused={i.index === foco}
              onCardFocus={onCardFocus}
              hide={i.index < foco}
            />
          );
        // case "OFFERHIGHLIGHT":
        //   return <OfHighlightRail key={index} data={i} isFocused={i.index === foco} onCardFocus={onCardFocus}/>;
        case "TITLE":
          return (
            <TitleRail
              key={index}
              data={i}
              translateY={foco * passoTitle}
              isFocused={i.index === foco}
              onCardFocus={onCardFocus}
              hide={i.index < foco}
            />
          );
      }
    });
  };

  return <div className={style.rails}>{renderRails()}</div>;
};

export default VerticalScroll;
