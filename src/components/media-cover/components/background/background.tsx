import React, { memo } from "react";
import styles from "./background.module.scss";

type Props = {
  url: string;
};

const Background: React.FC<Props> = ({ url }) => {
  return (
    <>
      <img src={url} alt="background" className={styles.background} />
    </>
  );
};

export default memo(Background);
