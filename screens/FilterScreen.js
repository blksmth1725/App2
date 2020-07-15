import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { Item, HeaderButtons } from "react-navigation-header-buttons";
import { useDispatch } from "react-redux";

import HeaderButton from "../components/HeaderButton";
import Colors from "../constant/Colors";
import { setFilters } from "../store/action/meals";

const FilterSwith = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.ZimaBlue }}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const FliterScreen = (props) => {
  const { navigation } = props;

  const [isGLutenFree, setIsGlutenFree] = useState(false);
  const [isLactosefree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGLutenFree,
      lactoseFree: isLactosefree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };

    dispatch(setFilters(appliedFilters));
  }, [isVegetarian, isGLutenFree, isLactosefree, isVegan, dispatch]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwith
        label="Gluten-Free"
        state={isGLutenFree}
        onChange={(newValue) => setIsGlutenFree(newValue)}
      />
      <FilterSwith
        label="Lactose-Free"
        state={isLactosefree}
        onChange={(newValue) => setIsLactoseFree(newValue)}
      />
      <FilterSwith
        label="Vegan"
        state={isVegan}
        onChange={(newValue) => setIsVegan(newValue)}
      />
      <FilterSwith
        label="Vegetarian "
        state={isVegetarian}
        onChange={(newValue) => setIsVegetarian(newValue)}
      />
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
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={navData.navigation.getParam("save")}
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
    marginVertical: 16,
  },
  title: {
    fontFamily: "open-sans",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
});

export default FliterScreen;
