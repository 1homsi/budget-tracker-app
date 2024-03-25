import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Vibration,
  Text,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { useTheme } from "../../../HOCs/ThemeContext";
import useColors from "../../../hooks/useColors";
import { scaleFont } from "../../../utils/scaleFont";

function TabBar({ state, descriptors, navigation }) {
  const { isDarkMode } = useTheme();
  const { primary, background, light } = useColors();

  return (
    <View
      style={[
        styles.tabBar,
        {
          backgroundColor: background,
          shadowColor: primary,
        },
      ]}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          Vibration.vibrate(20);
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabBarItem}
            key={index}
          >
            {label.toLowerCase() === "home" && (
              <>
                {isFocused ? (
                  <Ionicons name="home" size={scaleFont(23)} color={primary} />
                ) : (
                  <Ionicons
                    name="home"
                    size={scaleFont(23)}
                    color={isDarkMode ? "#fff" : "#222"}
                  />
                )}
              </>
            )}

            <Text
              style={{
                color: isFocused ? primary : isDarkMode ? "#fff" : "#222",
                fontSize: scaleFont(11),
                marginTop: 3,
                fontFamily: "Popins-Medium",
              }}
            >
              {label.charAt(0).toUpperCase() + label.slice(1)}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    height: 63,
    shadowOffset: {
      width: 0,
      height: -0.5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
  },
  tabBarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
});

export default TabBar;
