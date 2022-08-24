/* eslint-disable @typescript-eslint/no-unused-vars */
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
  const mockCR = [
    {
      url: "https://media.discordapp.net/attachments/739244960922206292/1011978360806707200/18.png",
      classificacao: "18",
    },
    {
      url: "https://media.discordapp.net/attachments/739244960922206292/1011978440750141590/16.png",
      classificacao: "16",
    },
    {
      url: "https://media.discordapp.net/attachments/739244960922206292/1011978650712821832/12.png",
      classificacao: "12",
    },
    {
      url: "https://media.discordapp.net/attachments/739244960922206292/1011978660904980480/14.png",
      classificacao: "14",
    },
    {
      url: "https://media.discordapp.net/attachments/739244960922206292/1011982674954567772/10.png",
      classificacao: "10",
    },
    {
      url: "https://media.discordapp.net/attachments/739244960922206292/1011982684072988712/L.png",
      classificacao: "L",
    },
    {
      url: "https://media.discordapp.net/attachments/739244960922206292/1011982823760076821/AL.png",
      classificacao: "AL",
    },
    {
      url: "https://media.discordapp.net/attachments/739244960922206292/1011982836334608474/A18.png",
      classificacao: "A18",
    },
    {
      url: "https://media.discordapp.net/attachments/739244960922206292/1011984726753558618/A12.png",
      classificacao: "A12",
    },
    {
      url: "https://media.discordapp.net/attachments/739244960922206292/1011984753248981102/A16.png",
      classificacao: "A16",
    },
    {
      url: "https://media.discordapp.net/attachments/739244960922206292/1011984779396259851/A14.png",
      classificacao: "A14",
    },
    {
      url: "https://media.discordapp.net/attachments/739244960922206292/1011984829472063559/A10.png",
      classificacao: "A10",
    },
  ];

  const contentRatingPath = selfRatedContent
    ? mockCR.find((i) => i.classificacao === "A" + contentRating)
    : mockCR.find((i) => i.classificacao === contentRating);

  return <img className={styles.icon} src={contentRatingPath?.url} alt="" />;
};

export default ContentRating;
