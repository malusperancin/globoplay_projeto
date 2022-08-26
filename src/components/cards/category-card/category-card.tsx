import { ReactElement, useEffect } from "react";
import CategoryCardData from "./category-card-data";
import style from "./category-card.module.scss";
import useNavigation from "../navigation/use-navigation";

type Props = {
  data: CategoryCardData;
  isFocus: boolean;
  translate: number;
};

const CategoryCard = ({ data, isFocus, translate }: Props): ReactElement => {
  const key = useNavigation();

  useEffect(() => {
    if (key === "ENTER" && isFocus) {
      var selectedData: CategoryCardData = data;
      console.log(selectedData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

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
