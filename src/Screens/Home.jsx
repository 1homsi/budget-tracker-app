import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import Header from "../Components/Header";
import useColors from "../../hooks/useColors";

const Home = () => {
  const { bgColor, textColor } = useColors();
  const [spentThisMonth, setSpentThisMonth] = useState(0);
  const [balance, setBalance] = useState(0);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: bgColor,
      }}
    >
      <Header />

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: textColor,
          }}
        >
          Balance
        </Text>
        <Text
          style={{
            color: textColor,
          }}
        >
          ${balance.toFixed(2)}
        </Text>
        <Text
          style={{
            color: textColor,
          }}
        >
          Spent this Month
        </Text>
        <Text
          style={{
            color: textColor,
          }}
        >
          ${spentThisMonth.toFixed(2)}
        </Text>
      </View>
      <View
        style={[
          styles.separator,
          {
            backgroundColor: textColor,
          },
        ]}
      ></View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
    alignSelf: "center",
  },
});
