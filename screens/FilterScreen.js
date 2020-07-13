import React, { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { Item, HeaderButtons } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
import Colors from "../constant/Colors";

const FliterScreen = (props) => {
  const [isGLutenFree, setIsGlutenFree] = useState(false);
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <View style={styles.filterContainer}>
        <Text>Gluten-Free</Text>
        <Switch
          trackColor={{ true: Colors.ZimaBlue }}
          value={isGLutenFree}
          onValueChange={(newValue) => setIsGlutenFree(newValue)}
        />
      </View>
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
    alignItems: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
  },
  title: {
    fontFamily: "open-sans",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
});

export default FliterScreen;
