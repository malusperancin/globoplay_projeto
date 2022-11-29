import React, { memo, ReactElement } from "react";
import styles from "./gradient.module.scss";
import gradientVerticalSmallFHD from "./image/gradient-vertical-small-fhd.png";
import gradientHorizontalSmallFHD from "./image/gradient-horizontal-small-fhd.png";

function Gradient(): ReactElement {
  return (
    <>
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
}

export default memo(Gradient);
