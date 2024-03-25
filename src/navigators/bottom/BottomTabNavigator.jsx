import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import TabBar from "./TabBar";
import Home from "../../Screens/Home";
import More from "../../Screens/More";
import Stats from "../../Screens/Stats";

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
        initialRouteName="home"
        detachInactiveScreens={true}
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
        }}
      >
        <Tab.Screen name="stats" component={Stats} />
        <Tab.Screen name="home" component={Home} />
        <Tab.Screen name="more" component={More} />
      </Tab.Navigator>
    </React.Fragment>
  );
};

export default BottomTabNavigator;
