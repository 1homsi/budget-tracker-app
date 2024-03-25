import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTheme } from "../HOCs/ThemeContext";

export default function useColors() {
  const { isDarkMode } = useTheme();

  const darkThemeColors = {
    primary: "#008DDA",
    secondary: "#13CDBE",
    darkColor: "#016B63",
    background: "#0F0F0F",
    light: "#1A1A1A",
  };

  const lightThemeColors = {
    primary: "#008DDA",
    secondary: "#13CDBE",
    darkColor: "#016B63",
    background: "#fff",
    light: "#F0F0F0",
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
