import { useCallback, useEffect, useState } from "react";

function useNavigation() {
  const [key, setKey] = useState("");

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    const keyName = e.keyCode;
    switch (keyName) {
      case 37:
        setKey("LEFT");
        break;
      case 39:
        setKey("RIGHT");
        break;
      case 13:
        setKey("ENTER");
        break;
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown, true);
    setKey("");
    // return (): void => document.removeEventListener("keydown", onKeyDown, true);
  }, [onKeyDown, key]);

  return key;
}

export default useNavigation;
