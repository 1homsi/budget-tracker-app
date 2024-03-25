import React from "react";
import { Pressable, View, Text } from "react-native";
import { useTheme } from "../../HOCs/ThemeContext";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { scaleFont } from "../../utils/scaleFont";
import useColors from "../../hooks/useColors";

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { textColor } = useColors();

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
        <Feather
          name={isDarkMode ? "sun" : "moon"}
          size={24}
          color={textColor}
        />
      </Pressable>
      <Text
        style={{
          fontSize: scaleFont(17),
          color: textColor,
        }}
      >
        EXPENSES
      </Text>
      <Pressable onPress={() => {}}>
        <FontAwesome name="user-circle-o" size={24} color={textColor} />
      </Pressable>
    </View>
  );
};

export default Header;
