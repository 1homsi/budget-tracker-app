import React, { useCallback } from "react";
import "react-native-gesture-handler";
import { SafeAreaView, View, StatusBar as Bar } from "react-native";
import { StatusBar } from "expo-status-bar";

import Main from "./src/Main";
import { ThemeProvider } from "./HOCs/ThemeContext";
import { Provider } from "react-redux";

import { PaperProvider } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import useColors from "./hooks/useColors";
import store from "./store";

function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Popins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Popins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Popins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Popins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Popins-Light": require("./assets/fonts/Poppins-Light.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <ThemeProvider>
        <Intial />
      </ThemeProvider>
    </View>
  );
}

const Intial = () => {
  const { primary, background } = useColors();

  return (
    <LinearGradient
      colors={[primary, background]}
      start={{ x: 0, y: 0.1 }}
      end={{ x: 0, y: 0.2 }}
      style={{
        flex: 1,
      }}
    >
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: Bar.currentHeight,
        }}
      >
        <Provider store={store}>
          <PaperProvider>
            <Main />
          </PaperProvider>
        </Provider>
        <StatusBar style={"light"} />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default App;
