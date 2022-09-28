import React from "react";
import style from "./resolution-label.module.scss";

type Props = {
  resolutions?: string[];
};

const ResolutionLabel = ({ resolutions }: Props): React.ReactElement | null => {
  const labelResolution = resolutions
    ? resolutions[resolutions.length - 1]
    : "";

  if (labelResolution === "4K" || labelResolution === "8K")
    return (
      <div className={style.containerLabel}>
        <span className={style.resolutionLabel}> {labelResolution} </span>
      </div>
    );

  return null;
};

export default ResolutionLabel;
