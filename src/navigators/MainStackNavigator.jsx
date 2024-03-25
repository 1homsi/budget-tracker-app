import { createStackNavigator } from "@react-navigation/stack";

import BottomTabNavigator from "./bottom/BottomTabNavigator";

import LoadingOverlay from "../Components/LoadingOverlay";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <LoadingOverlay loading={false}>
      <Stack.Navigator
        initialRouteName={"Main"}
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}
      >
        <Stack.Screen
          name="Main"
          component={BottomTabNavigator}
          options={{
            gestureEnabled: false,
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </LoadingOverlay>
  );
};

export default MainStackNavigator;
