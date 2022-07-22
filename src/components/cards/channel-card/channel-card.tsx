import React, { ReactElement, useEffect } from "react";
import useNavigation from "../navigation/use-navigation";
import ChannelCardData from "./channel-card-data";
import style from "./style.module.scss";

type Props = {
  data: ChannelCardData;
  isFocus: boolean;
  translate: number;
};

const TitleCard = ({ data, isFocus, translate }: Props): ReactElement => {
  const key = useNavigation();
  const styles = {
    transform: `translate(${translate}px)`,
  };
  const image = !isFocus ? data.logo : data.logoSelected;

  useEffect(() => {
    if (key === "ENTER" && isFocus) {
      var selectedData: ChannelCardData = data;
      console.log(selectedData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return (
    <button
      style={styles}
      className={isFocus ? style.buttonFocus : style.button}
      type="button"
    >
      <img className={style.image} src={image} alt="oi"></img>
    </button>
  );
};

export default TitleCard;
