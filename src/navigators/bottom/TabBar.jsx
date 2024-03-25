import {
  View,
  TouchableOpacity,
  StyleSheet,
  Vibration,
  Text,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import Foundation from "react-native-vector-icons/Foundation";

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
            {label.toLowerCase() === "stats" && (
              <>
                {isFocused ? (
                  <Foundation
                    name="graph-trend"
                    size={scaleFont(23)}
                    color={primary}
                  />
                ) : (
                  <Foundation
                    name="graph-trend"
                    size={scaleFont(23)}
                    color={isDarkMode ? "#fff" : "#222"}
                  />
                )}
              </>
            )}
            {label.toLowerCase() === "home" && (
              <View
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 300,
                  backgroundColor: primary,
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 40,
                }}
              >
                <Feather name="plus" size={scaleFont(23)} color={light} />
              </View>
            )}

            {label.toLowerCase() === "more" && (
              <>
                {isFocused ? (
                  <Entypo
                    name="dots-three-horizontal"
                    size={scaleFont(23)}
                    color={primary}
                  />
                ) : (
                  <Entypo
                    name="dots-three-horizontal"
                    size={scaleFont(23)}
                    color={isDarkMode ? "#fff" : "#222"}
                  />
                )}
              </>
            )}

            {label.toLowerCase() !== "home" && (
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
            )}
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
