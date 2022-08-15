import { HighlightRailData } from "./highlight-rail-data";

type Props = {
  data: HighlightRailData;
  isFocused: boolean;
};

const HighlightRail: React.FC<Props> = ({ data, isFocused }) => {
  return (
    <div>
      <p> {data.title} </p>
      <p> Highlight </p>
    </div>
  );
};

export default HighlightRail;
