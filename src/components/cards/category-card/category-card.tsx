import { ReactElement } from "react";
import CategoryCardData from "./category-card-data";
import style from "./category-card.module.scss";

type Props = {
  data: CategoryCardData;
  isFocus: boolean;
  translate: number;
};

const CategoryCard = ({ data, isFocus, translate }: Props): ReactElement => {
  const styles = {
    transform: `translate(${translate}px)`,
  };

  return (
    <button
      style={styles}
      className={isFocus ? style.buttonFocus : style.button}
      type="button"
    >
      <img className={style.image} src={data.posterUrl} alt=""></img>
    </button>
  );
};

export default CategoryCard;
