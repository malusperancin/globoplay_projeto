import { ReactElement } from "react";
import BroadcastCardType from "./broadcast-card-type";
import style from "./broadcast-card.module.scss";
import liveIcon from "./image/live-icon.png";
import { sliceText } from "../../../utils/slice-text";

type Props = {
  data: BroadcastCardType;
  isFocus: boolean;
  translate: number;
};

const BroadcastCard = ({ data, isFocus, translate }: Props): ReactElement => {
  const styles = {
    transform: `translate(${translate}px)`,
  };

  return (
    <div data-testid={`broadcast-card`} className={style.container}>
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
            {data.broadcast.isLive && (
              <img className={style.liveIcon} src={liveIcon} alt="ao vivo" />
            )}
            <p className={style.hour}> {data.stringTime} </p>
          </div>
          <p className={isFocus ? style.titleSelect : style.title}>
            {sliceText(data.headline, 21)}
          </p>
        </div>
      </button>
    </div>
  );
};

export default BroadcastCard;
