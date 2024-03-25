import React from "react";
import { View, StyleSheet } from "react-native";
// import Sidebar from "../src/components/Sidebar";

const withSidebar = (WrappedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isSidebarOpen: false,
      };
    }

    toggleSidebar = () => {
      this.setState((prevState) => ({
        isSidebarOpen: !prevState.isSidebarOpen,
      }));
    };

    render() {
      const { isSidebarOpen } = this.state;

      return (
        <View style={{ flex: 1, flexDirection: "row" }}>
          {/* <Sidebar
            navigation={this.props.navigation}
            isOpen={isSidebarOpen}
            toggleSidebar={this.toggleSidebar}
          /> */}
          <View style={styles.contentContainer}>
            <WrappedComponent
              {...this.props}
              toggleSidebar={this.toggleSidebar}
              isSidebarOpen={isSidebarOpen}
            />
          </View>
        </View>
      );
    }
  };
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
});

export default withSidebar;
