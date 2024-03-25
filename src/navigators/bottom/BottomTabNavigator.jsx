import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import TabBar from "./TabBar";
import Home from "../../Screens/Home";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <React.Fragment>
      <Tab.Navigator
        tabBar={(props) => (
          <TabBar
            {...props}
            state={{ ...props.state, routes: props.state.routes.slice(0, 5) }}
          />
        )}
        detachInactiveScreens={true}
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
        }}
      >
        <Tab.Screen name="home" component={Home} />
      </Tab.Navigator>
    </React.Fragment>
  );
};

export default BottomTabNavigator;
