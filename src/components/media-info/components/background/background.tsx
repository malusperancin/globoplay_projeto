import React, { useEffect, useState } from "react";
import styles from "./background.module.scss";
import gradientVerticalSmallFHD from "./assets/gradient-vertical-small-fhd.png";
import gradientHorizontalSmallFHD from "./assets/gradient-horizontal-small-fhd.png";

type Props = {
  url: string;
};

const Background: React.FC<Props> = ({ url }) => {
  const [activeImageUrl, setActiveImageUrl] = useState("");

  useEffect(() => {
    setActiveImageUrl(url);
  }, [url]);

  return (
    <>
      <img
        src={activeImageUrl}
        alt="background"
        className={styles.background}
      />
      <img
        src={gradientHorizontalSmallFHD}
        alt="horizontal gradient"
        className={styles.horizontalGradient}
      />
      <img
        src={gradientVerticalSmallFHD}
        alt="vertical gradient"
        className={styles.verticalGradient}
      />
    </>
  );
};

export default Background;
