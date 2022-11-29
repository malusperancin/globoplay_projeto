import { memo, useEffect } from "react";
import { CARD_CATEGORY } from "../../../constants/constants";
import CategoryCard from "../../cards/category-card/category-card";
import MediaInfoType from "../../media-cover/components/media-info/media-info-type";
import { CategoryRailType } from "./category-rail-type";
import {
  calcTranslateScroll,
  useHorizontalScroll,
} from "../horizontal-navigation/horizontal-navigation";

import style from "./category-rail.module.scss";

type Props = {
  data: CategoryRailType;
  isFocused: boolean;
  onCardFocus: (info: MediaInfoType) => void;
  hide: boolean;
};
const CategoryRail: React.FC<Props> = ({
  data,
  isFocused,
  onCardFocus,
  hide,
}) => {
  const foco = useHorizontalScroll(data.cards.length);

  const translate = calcTranslateScroll(
    isFocused,
    foco,
    CARD_CATEGORY.NUM_CARD_SCREEN,
    CARD_CATEGORY.CARD_WIDTH
  );

  useEffect(() => {
    if (isFocused) {
      onCardFocus({ contentType: data.contentType, card: data.cards[foco] });
    }
  }, [isFocused, foco, data, onCardFocus]);

  if (hide) return <></>;

  return (
    <div>
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

export default memo(CategoryRail);
