import ContentRating from "../../../content-rating/content-rating";
import ResolutionLabel from "../resolution-label";
import TitleCardData from "../../../cards/title-card/title-card-data";
import getContentBrand from "../../../../utils/get-content-brand";
import "./styles.scss";

type Props = {
  isVisible: boolean;
  info: TitleCardData;
};

const MediaInfoTitles = ({ isVisible, info }: Props) => {
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
        {!info.selfRatedContent && (
          <span className="capitalized-strings">{getContentBrand(info)}</span>
        )}
        <ResolutionLabel resolutions={info?.technicalSpecs?.resolutions} />
      </div>
      <p>{info.description}</p>
    </div>
  );
};

export default MediaInfoTitles;
