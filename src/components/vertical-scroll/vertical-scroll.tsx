import React, { ReactNode, useEffect, useState } from "react";
import CategoryRail from "../rails/category-rail/category-rail";
import { RailData } from "./Types";
import ChannelRail from "../rails/channel-rail/channel-rail";
import TitleRail from "../rails/title-rail/title-rail";
import OfHighlightRail from "../rails/highlight-rail/highlight-rail";
import useNavigation from "../cards/navigation/use-navigation";

type Props = {
  isFocused: boolean;
  mediaInfoHeight: number;
  onCardFocus: Function;
  rails: [];
};

const VerticalScroll: React.FC<Props> = ({
  rails,
}) => {
  const key = useNavigation();
  const [foco, setFocus] = useState(0);

  useEffect(() => {
    switch (key) {
      case "DOWN":
        if (foco !== 0){
          setFocus(foco - 1);
        }
        break;
      case "UP":
        if (foco !== rails.length){
         setFocus(foco + 1);
        }  
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const renderRails = (): ReactNode => {
    const allRails = rails as RailData[];
    // eslint-disable-next-line array-callback-return
    return allRails.map((i) => {
      switch (i.contentType) {
        case "CATEGORY":
          return <CategoryRail data={i} isFocused={i.index === foco} />;
        case "BROADCAST_CHANNEL":
          return <ChannelRail data={i} isFocused={i.index === foco} />;
        case "OFFERHIGHLIGHT":
          return <OfHighlightRail data={i} isFocused={i.index === foco} />;
        case "TITLE":
          return <TitleRail data={i} isFocused={i.index === foco} />;
      }
    });
  };

  return <div>{renderRails()}</div>;
};

export default VerticalScroll;
