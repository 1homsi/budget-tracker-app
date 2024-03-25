import React from "react";
import { Pressable, View } from "react-native";
import { useTheme } from "../../HOCs/ThemeContext";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
      }}
    >
      <Pressable onPress={toggleTheme}>
        <Feather name={isDarkMode ? "sun" : "moon"} size={30} />
      </Pressable>

      <Pressable onPress={() => {}}>
        <FontAwesome name="user-circle-o" size={30} />
      </Pressable>
    </View>
  );
};

export default Header;
