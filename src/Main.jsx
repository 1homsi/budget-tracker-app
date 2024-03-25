import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from "./navigators/MainStackNavigator";

import { navigationRef } from "../utils/navigationService";

import { RootSiblingParent } from "react-native-root-siblings";

export default function Main() {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootSiblingParent>
        <MainStackNavigator />
      </RootSiblingParent>
    </NavigationContainer>
  );
}
