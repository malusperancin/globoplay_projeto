import { ReactNode } from "react";
import Background from "./components/background/background";
import MediaInfoBroadcast from "./components/media-info-broadcast/media-info-broadcast";
import MediaInfoCategories from "./components/media-info-categories/media-info-categories";
import MediaInfoChannels from "./components/media-info-channels/media-info-channels";
import MediaInfoTitles from "./components/media-info-titles/media-info-titles";
import MediaInfoData from "./media-info-data";

import style from "./media-info.module.scss";

type Props = {
  isVisible: boolean;
  data: MediaInfoData | null;
};

const MediaInfo: React.FC<Props> = ({ isVisible, data }) => {
  if (!isVisible || !data || !data.card || !data.contentType) {
    return null;
  }
  var url = "";
  if (data.card.backgroundUrl) url = data.card.backgroundUrl;
  else url = data.card.cover.landscape;

  const renderMediaInfo = (): ReactNode => {
    switch (data.contentType) {
      case "BROADCAST_CHANNEL":
        return <MediaInfoChannels isVisible={isVisible} info={data.card} />;
      case "CATEGORY":
        return <MediaInfoCategories isVisible={isVisible} info={data.card} />;
      case "BROADCAST":
        return <MediaInfoBroadcast isVisible={isVisible} info={data.card} />;
      case "TITLE":
        return <MediaInfoTitles isVisible={isVisible} info={data.card} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Background url={url} />
      <div className={style.mediaInfo}>{renderMediaInfo()}</div>
    </div>
  );
};

export default MediaInfo;
