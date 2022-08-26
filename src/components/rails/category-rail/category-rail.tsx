import { useEffect } from "react";
import { CARD_CATEGORY } from "../../../constants/constants";
import CategoryCard from "../../cards/category-card/category-card";
import MediaInfoData from "../../media-info/media-info-data";
import {
  calcTranslateScroll,
  useHorizontalScroll,
} from "../horizontal-navigation/horizontal-navigation";
import { CategoryRailData } from "./category-rail-data";
import style from "./category-rail.module.scss";

type Props = {
  data: CategoryRailData;
  isFocused: boolean;
  onCardFocus: (info: MediaInfoData) => void;
  translateY: number;
  hide: boolean;
};
const CategoryRail: React.FC<Props> = ({
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
    CARD_CATEGORY.NUM_CARD_SCREEN,
    CARD_CATEGORY.CARD_HEIGHT
  );

  useEffect(() => {
    if (isFocused) {
      onCardFocus({ contentType: data.contentType, card: data.cards[foco] });
    }
  }, [isFocused, foco, data, onCardFocus]);

  if (hide) return <></>;

  return (
    <div style={styles}>
      <p className={style.title}> Categorias </p>
      <div className={style.rail}>
        {data.cards.map((i, index) => {
          return (
            <CategoryCard
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

export default CategoryRail;
