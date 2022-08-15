import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import BackgroundGradients from "../background-gradients/background-gradients";

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
      <BackgroundGradients />
    </>
  );
};

export default Background;
