import React from "react";
import styles from "./media-info-categories.module.scss";

type Props = {
  isVisible: boolean;
  info: {
    headline: string;
  };
};

const MediaInfoCategories: React.FC<Props> = ({ isVisible, info }) => {
  return isVisible ? (
    <div className={styles.categories}>
      <h1 className={styles.headline}>{info.headline}</h1>
    </div>
  ) : null;
};

export default MediaInfoCategories;
