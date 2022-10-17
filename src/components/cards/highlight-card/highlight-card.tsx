import { ReactElement } from "react";
import HighlightCardType from "./highlight-card-type";
import style from "./highlight-card.module.scss";

type Props = {
  data: HighlightCardType;
  isFocus: boolean;
};

const HighlightCard = ({ data, isFocus }: Props): ReactElement => {
  console.log(data);
  return (
    <button
      type="button"
      className={isFocus ? style.buttonFocus : style.button}
    ></button>
  );
};

export default HighlightCard;
