import React from "react";
import { Pressable, View, Text } from "react-native";
import { useTheme } from "../../HOCs/ThemeContext";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { scaleFont } from "../../utils/scaleFont";

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Pressable onPress={toggleTheme}>
        <Feather name={isDarkMode ? "sun" : "moon"} size={28} />
      </Pressable>
      <Text
        style={{
          fontSize: scaleFont(17),
        }}
      >
        EXPENSES
      </Text>
      <Pressable onPress={() => {}}>
        <FontAwesome name="user-circle-o" size={28} />
      </Pressable>
    </View>
  );
};

export default Header;
