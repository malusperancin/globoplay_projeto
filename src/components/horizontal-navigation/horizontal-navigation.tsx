import { useEffect, useState } from "react";
import useNavigation from "../cards/navigation/use-navigation";

function useHorizontalScroll(lenght: number) {
  const [foco, setFocus] = useState(0);
  const key = useNavigation();

  useEffect(() => {
    switch (key) {
      case "LEFT":
        if (foco !== 0) setFocus(foco - 1);
        break;
      case "RIGHT":
        if (foco !== lenght - 1) setFocus(foco + 1);
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return foco;
}

export default useHorizontalScroll;
