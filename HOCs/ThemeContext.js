import React, { createContext, useState, useContext, useEffect } from "react";
import { Appearance, useColorScheme } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const colorScheme = useColorScheme();

  const [isUsingDeviceTheme, setIsUsingDeviceTheme] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === "dark");

  useEffect(() => {
    const loadThemeSettings = async () => {
      try {
        const savedThemeSettings = await AsyncStorage.getItem("themeSettings");
        if (savedThemeSettings) {
          const { isUsingDeviceTheme, isDarkMode } =
            JSON.parse(savedThemeSettings);
          setIsUsingDeviceTheme(isUsingDeviceTheme);
          setIsDarkMode(isDarkMode);
        }
      } catch (error) {
        console.error("Error loading theme settings:", error);
      }
    };

    loadThemeSettings();
  }, []);

  useEffect(() => {
    const saveThemeSettings = async () => {
      try {
        const themeSettings = JSON.stringify({
          isUsingDeviceTheme,
          isDarkMode,
        });
        await AsyncStorage.setItem("themeSettings", themeSettings);
      } catch (error) {
        console.error("Error saving theme settings:", error);
      }
    };

    saveThemeSettings();
  }, [isUsingDeviceTheme, isDarkMode]);

  useEffect(() => {
    if (isUsingDeviceTheme) {
      const subscription = Appearance.addChangeListener(({ colorScheme }) => {
        setIsDarkMode(colorScheme === "dark");
      });

      return () => {
        subscription.remove();
      };
    }
  }, [isUsingDeviceTheme]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    setIsUsingDeviceTheme(false);
  };

  const toggleDeviceTheme = () => {
    setIsUsingDeviceTheme((prevValue) => !prevValue);
  };

  return (
    <ThemeContext.Provider
      value={{ isDarkMode, toggleTheme, isUsingDeviceTheme, toggleDeviceTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
