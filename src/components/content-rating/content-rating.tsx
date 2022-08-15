import { ReactElement } from "react";

import styles from "./style.module.scss";

type Props = {
  contentRating: string;
  selfRatedContent: boolean;
};

const ContentRating = ({
  contentRating,
  selfRatedContent,
}: Props): ReactElement => {
  console.log(contentRating);

  const contentRatingPath = selfRatedContent
    ? "./images/A" + contentRating + ".svg"
    : "./images/" + contentRating + ".svg";

  return (
    <img
      className={styles.icon}
      src={contentRatingPath}
      alt="ícone de classificação etária"
    />
  );
};

export default ContentRating;
