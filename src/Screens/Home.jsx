import { View, Text } from "react-native";
import React from "react";
import Header from "../Components/Header";
import useColors from "../../hooks/useColors";

const Home = () => {
  const { bgColor } = useColors();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: bgColor,
      }}
    >
      <Header />
    </View>
  );
};

export default Home;
