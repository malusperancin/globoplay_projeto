import React from "react";
import styles from "./media-info-channels.module.scss";

type Props = {
  isVisible: boolean;
  info: {
    headline: string;
    description: string;
    logo: string;
  };
};

const MediaInfoChannels: React.FC<Props> = ({ isVisible, info }) => {
  return isVisible ? (
    <div className={styles.channels}>
      <img className={styles.logo} src={info.logo} alt={info.headline} />
      <p className={styles.text}>{info.description}</p>
    </div>
  ) : null;
};

export default MediaInfoChannels;
