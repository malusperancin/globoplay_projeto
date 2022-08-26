import { useEffect, useState } from "react";
import useNavigation from "../../cards/navigation/use-navigation";

export function useHorizontalScroll(lenght: number) {
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
      case "UP":
        setFocus(0);
        break;
      case "DOWN":
        setFocus(0);
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return foco;
}

export function calcTranslateScroll(
  isFocused: boolean,
  foco: number,
  num_card_screen: number,
  card_height: number
) {
  if (isFocused) {
    return foco <= num_card_screen
      ? foco * -card_height
      : -card_height * num_card_screen;
  }
  return 0;
}
