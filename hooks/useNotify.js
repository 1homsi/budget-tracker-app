import { useState } from "react";
import Toast from "react-native-root-toast";
import useColors from "./useColors";

function useNotify() {
  const [toast, setToast] = useState(null);
  const { darkColor, primary } = useColors();

  const notify = (message, duration = 3000) => {
    const newToast = Toast.show(message, {
      duration: duration,
      backgroundColor: darkColor,
      opacity: 1,
      shadowColor: "transparent",
    });
    setToast(newToast);

    setTimeout(() => {
      hideToast();
    }, duration);
  };

  const hideToast = () => {
    if (toast !== null) {
      Toast.hide(toast);
      setToast(null);
    }
  };

  return { notify };
}

export default useNotify;
