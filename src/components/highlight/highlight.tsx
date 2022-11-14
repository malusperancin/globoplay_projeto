import { useEffect } from "react";
import HighlightCard from "../cards/highlight-card/highlight-card";
import MediaInfoType from "../media-cover/components/media-info/media-info-type";
import { useHorizontalScroll } from "../rails/horizontal-navigation/horizontal-navigation";
import HighlightRailType from "./highlight-type";

import style from "./highlight.module.scss";

type Props = {
  data: HighlightRailType;
  isFocused: boolean;
  onCardFocus: (info: MediaInfoType) => void;
  hide: boolean;
};

const Highlight: React.FC<Props> = ({ data, isFocused, onCardFocus, hide }) => {
  const foco = useHorizontalScroll(data.cards.length);

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
    <div className={style.highlight}>
      {data.cards.map((i, index) => {
        return <HighlightCard isFocus={index === foco} key={index} data={i} />;
      })}
    </div>
  );
};

export default Highlight;
