import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTheme } from "../HOCs/ThemeContext";

export default function useColors() {
  const { isDarkMode } = useTheme();

  const darkThemeColors = {
    primary: "#005F7F",
    secondary: "#13CDBE",
    darkColor: "#016B63",
    background: "#0F0F0F",
  };

  const lightThemeColors = {
    primary: "#005F7F",
    secondary: "#13CDBE",
    darkColor: "#016B63",
    background: "#fff",
  };


  switch ((isDarkMode ? "dark" : "light")) {
    case "dark":
      return darkThemeColors;
    case "light":
      return lightThemeColors;
    default:
      return lightThemeColors;
  }
}
