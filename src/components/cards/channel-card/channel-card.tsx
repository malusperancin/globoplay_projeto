import React, { ReactElement } from "react";
import ChannelCardType from "./channel-card-type";
import style from "./channel-card.module.scss";

type Props = {
  data: ChannelCardType;
  isFocus: boolean;
  translate: number;
};

const ChannelCard = ({ data, isFocus, translate }: Props): ReactElement => {
  const styles = {
    transform: `translate(${translate}px)`,
  };

  return (
    <button
      style={styles}
      className={isFocus ? style.buttonFocus : style.button}
      type="button"
    >
      <img
        className={style.image}
        src={!isFocus ? data.logo : data.logoSelected}
        alt=""
      ></img>
    </button>
  );
};

export default ChannelCard;
