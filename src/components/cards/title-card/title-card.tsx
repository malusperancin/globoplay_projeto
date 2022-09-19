import { ReactElement } from "react";
import TitleCardData from "./title-card-data";
import style from "./title-card.module.scss";

type Props = {
  data: TitleCardData;
  isFocus: boolean;
  translate: number;
};

const TitleCard = ({ data, isFocus, translate }: Props): ReactElement => {
  const styles = {
    transform: `translate(${translate}px)`,
  };

  return (
    <button
      style={styles}
      className={isFocus ? style.buttonFocus : style.button}
      type="button"
    >
      <img className={style.image} src={data.poster.tv} alt=""></img>
    </button>
  );
};

export default TitleCard;
