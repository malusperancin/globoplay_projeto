import { ReactNode } from "react";
import Background from "./components/background/background";
import MediaInfo from "./components/media-info/media-info";
import MediaInfoType from "./components/media-info/media-info-type";

import style from "./media-cover.module.scss";

type Props = {
  isVisible: boolean;
  data: MediaInfoType | null;
};

const MediaCover: React.FC<Props> = ({ isVisible, data }) => {
  if (!isVisible || !data || !data.card || !data.contentType) {
    return null;
  }
  var url = "";
  if (data.card.backgroundUrl) url = data.card.backgroundUrl;
  else url = data.card.cover.landscape;

  const renderMediaInfo = (): ReactNode => {
    return <MediaInfo isVisible={isVisible} info={data} />;
  };

  return (
    <div>
      <Background url={url} />
      <div className={style.mediaInfo}>{renderMediaInfo()}</div>
    </div>
  );
};

export default MediaCover;
