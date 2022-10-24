import { ReactElement } from "react";
import VideoCardType from "./video-card-type";
import style from "./video-card.module.scss";
import imgGradient from "./image/gradient.png";

type Props = {
  data: VideoCardType;
  isFocus: boolean;
  translate: number;
};

const VideoCard = ({ data, isFocus, translate }: Props): ReactElement => {
  const styles = {
    transform: `translate(${translate}px)`,
  };

  return (
    <div data-testid={`video-card`} className={style.container}>
      <button style={styles} className={style.button} type="button">
        <div className={style.poster}>
          <img
            alt=""
            className={isFocus ? style.gradientFocus : style.gradient}
            src={imgGradient}
          />
          <div className={style.progressBar}>
            <span
              className={style.completed}
              style={{ width: `${data.watchedPercent}%` }}
            />
          </div>
          <span className={style.spanTime}>
            <p className={style.time}> {data.formattedDuration} </p>
          </span>
          <img
            src={data.logoUrl}
            className={isFocus ? style.imageFocus : style.image}
            alt=""
          />
        </div>
        <div className={style.info}>
          <p className={style.title}> {data.title} </p>
          <p className={style.description}> {data.headline} </p>
        </div>
      </button>
    </div>
  );
};

export default VideoCard;
