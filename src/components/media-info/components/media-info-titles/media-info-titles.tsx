import ContentRating from "../../../content-rating/content-rating";
import ResolutionLabel from "../resolution-label";
import TitleCardData from "../../../cards/title-card/title-card-data";
import getContentBrand from "../../../../utils/get-content-brand";
import "./media-info-titles.scss";

type Props = {
  isVisible: boolean;
  info: TitleCardData;
};

const MediaInfoTitles = ({ isVisible, info }: Props) => {
  const label = getContentBrand(info)
    ?.split("  ")
    .filter((item) => item !== "");

  return isVisible === false ? null : (
    <div className="about">
      <div className="brand-logo">
        {info.contentBrand?.trimmedLogo && (
          <img
            src={info.contentBrand.trimmedLogo}
            alt={info.contentBrand.name}
          />
        )}
      </div>
      <h1>{info.headline}</h1>
      <div className="info">
        {info.contentRating && (
          <ContentRating
            contentRating={info.contentRating}
            selfRatedContent={info.selfRatedContent}
          />
        )}
        <ResolutionLabel resolutions={info?.technicalSpecs?.resolutions} />

        {!info.selfRatedContent &&
          label?.map((item, index) => (
            <span key={index} className="capitalized-strings">
              {item}
            </span>
          ))}
      </div>
      <p>{info.description}</p>
    </div>
  );
};

export default MediaInfoTitles;
