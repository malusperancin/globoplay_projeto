import { ReactElement } from "react";
import TitleCardType from "./title-card-type";
import style from "./title-card.module.scss";

type Props = {
  data: TitleCardType;
  isFocus: boolean;
  translate: number;
};

const TitleCard = ({ data, isFocus, translate }: Props): ReactElement => {
  const styles = {
    transform: `translate(${translate}px)`,
  };

  return (
    <div data-testid={`title-card`} className={style.container}>
      <button
        style={styles}
        className={isFocus ? style.buttonFocus : style.button}
        type="button"
      >
        <img className={style.image} src={data.poster.tv} alt=""></img>
      </button>
    </div>
  );
};

export default TitleCard;
