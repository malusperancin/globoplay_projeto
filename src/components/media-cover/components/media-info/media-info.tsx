import ContentRating from "../../../content-rating/content-rating";
import ResolutionLabel from "../resolution-label";
import getContentBrand from "../../../../utils/get-content-brand";
import styles from "./media-info.module.scss";
import MediaInfoType from "./media-info-type";
import { sliceText } from "../../../../utils/slice-text";
import { memo } from "react";

type Props = {
  isVisible: boolean;
  info: MediaInfoType;
};

const MediaInfoGeneral = ({ isVisible, info }: Props) => {
  const label = getContentBrand(info.card)
    ?.split("  ")
    .filter((item) => item !== "");

  if (isVisible === false) {
    return null;
  }

  switch (info.contentType) {
    case "OFFERHIGHLIGHT": {
      return (
        <div
          className={styles.offerHighlight}
          data-testid="media-info-highlight"
        >
          <img className={styles.logo} src={info.card.headlineImage} alt="" />
          <p className={styles.title}>{info.card.description}</p>
        </div>
      );
    }
    case "BROADCAST": {
      const channelName = info.card.broadcast?.channel?.name || "";
      return (
        <div className={styles.broadcast}>
          <span className={styles.channelName}>{channelName}</span>
          <h1 className={styles.headline}>{info.card.headline}</h1>
        </div>
      );
    }
    case "CATEGORY":
      return (
        <div className={styles.categories}>
          <h1 className={styles.headline}>{info.card.headline}</h1>
        </div>
      );
    case "BROADCAST_CHANNEL":
      return (
        <div className={styles.channels}>
          <img
            className={styles.logo}
            src={info.card.logo}
            alt={info.card.headline}
          />
          <p className={styles.text}>{info.card.description}</p>
        </div>
      );
    case "TITLE":
      return (
        <div className={styles.title}>
          <div className={styles.about}>
            <div className={styles.brandLogo}>
              {info.card.contentBrand?.trimmedLogo && (
                <img
                  src={info.card.contentBrand.trimmedLogo}
                  alt={info.card.contentBrand.name}
                />
              )}
            </div>
            <h1>{info.card.headline}</h1>
            <div className={styles.info}>
              {info.card.contentRating && (
                <ContentRating
                  contentRating={info.card.contentRating}
                  selfRatedContent={info.card.selfRatedContent}
                />
              )}
              <ResolutionLabel
                resolutions={info?.card.technicalSpecs?.resolutions}
              />

              {!info.card.selfRatedContent &&
                label?.map((item, index) => (
                  <span key={index} className={styles.capitalizedStrings}>
                    {item}
                  </span>
                ))}
            </div>
            <p>{info.card.description}</p>
          </div>
        </div>
      );
    case "VIDEO":
      return (
        <div className={styles.video}>
          <div className={styles.about}>
            <h1>{info.card.headline}</h1>
            <div className={styles.info}>
              {info.card.contentRating && (
                <ContentRating
                  contentRating={info.card.contentRating}
                  selfRatedContent={info.card.selfRatedContent}
                />
              )}
              <ResolutionLabel
                resolutions={info?.card.technicalSpecs?.resolutions}
              />

              {!info.card.selfRatedContent &&
                label?.map((item, index) => (
                  <span key={index} className={styles.capitalizedStrings}>
                    {item}
                  </span>
                ))}
            </div>
            <p>{sliceText(info.card.description, 180)}</p>
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default memo(MediaInfoGeneral);
