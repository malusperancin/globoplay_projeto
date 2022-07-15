//import { mapKeyEvent, KEYS } from "shield-input";
import { TitleRailData } from "./title-rail-data";
import style from "./style.module.css";
import TitleCard from "../../cards/title-card/title-card";
import { useCallback, useEffect, useState } from "react";

type Props = {
  data: TitleRailData;
  isFocused: boolean;
};

const TitleRail: React.FC<Props> = ({ data, isFocused }) => {
  const [isFocus, setFocus] = useState(0);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const keyName = e.keyCode;
      switch (keyName) {
        case 37:
          if( isFocus !== 0)
            setFocus(isFocus - 1)
          break;
        case 39:
          if (isFocus !== data.resources.length -1)
            setFocus(isFocus + 1)
          break;
        case 13:
          console.log("enter");
          break;
        default:
          break;
      }
    },
    [data.resources.length, isFocus]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown, true);
    return (): void => document.removeEventListener("keydown", onKeyDown, true);
  }, [onKeyDown]);
  

  return (
    <div className={style.rail}>
      {data.resources.map((i, index) => {
        console.log(isFocus)
        return <TitleCard translate={ isFocus <= 14 ? (isFocus) * -189 : -189 * 14} isFocus={index === isFocus } data={i} />
      })}
    </div>
  );
};

export default TitleRail;

