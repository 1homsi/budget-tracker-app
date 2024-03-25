import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import useColors from "../../hooks/useColors";

const LoadingOverlay = ({ loading, children }) => {
  const { background, primary } = useColors();

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={{ ...styles.overlay, backgroundColor: background }}>
          <ActivityIndicator size="large" color={primary} />
        </View>
      ) : null}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    position: "absolute",
    zIndex: 200000,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default LoadingOverlay;
