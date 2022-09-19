import { ReactElement } from "react";
import BroadcastCardData from "./broadcast-card-data";
import style from "./broadcast-card.module.scss";
import liveIcon from "./assets/live-icon.png";
import { sliceText } from "../../../utils/slice-text";

type Props = {
  data: BroadcastCardData;
  isFocus: boolean;
  translate: number;
};

const BroadcastCard = ({ data, isFocus, translate }: Props): ReactElement => {
  const styles = {
    transform: `translate(${translate}px)`,
  };

  return (
    <button
      style={styles}
      className={isFocus ? style.buttonFocus : style.button}
      type="button"
    >
      <div className={style.logoContainer}>
        <img
          src={
            isFocus
              ? data.broadcast.channel.logoSelected
              : data.broadcast.channel.logo
          }
          className={style.logoChannel}
          alt=""
        />
      </div>
      <img src={data.posterUrl} className={style.poster} alt="" />
      <div className={style.info}>
        <div className={style.firstLine}>
          <img className={style.liveIcon} src={liveIcon} alt="ao vivo" />
          <p className={style.hour}> {data.stringTime} </p>
        </div>
        <p className={isFocus ? style.titleSelect : style.title}>
          {sliceText(data.headline, 21)}
        </p>
      </div>
    </button>
  );
};

export default BroadcastCard;
