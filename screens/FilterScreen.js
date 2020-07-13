import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Item, HeaderButtons } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";

const FliterScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Filter Screen</Text>
    </View>
  );
};

FliterScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Filtered Meals",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FliterScreen;
