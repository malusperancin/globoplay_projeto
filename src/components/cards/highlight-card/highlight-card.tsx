import { ReactElement } from "react";
import HighlightCardType from "./highlight-card-type";
import style from "./highlight-card.module.scss";

type Props = {
  data: HighlightCardType;
  isFocus: boolean;
};

const HighlightCard = ({ data, isFocus }: Props): ReactElement => {
  return (
    <div data-testid={`highlight-card`} className={style.container}>
      <button
        type="button"
        className={isFocus ? style.buttonFocus : style.button}
      ></button>
    </div>
  );
};

export default HighlightCard;
