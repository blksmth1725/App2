import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Item, HeaderButtons } from "react-navigation-header-buttons";

import { MEALS } from "../data/dummy-data";
import HeaderButton from "../components/HeaderButton";

const MealsDetailScreen = (props) => {
	const mealId = props.navigation.getParam("mealId");

	const selectedMeal = MEALS.find((meal) => meal.id === mealId);

	return (
		<View style={styles.screen}>
			<Text>{selectedMeal.title}</Text>
		</View>
	);
};

MealsDetailScreen.navigationOptions = (navigationData) => {
	const mealId = navigationData.navigation.getParam("mealId");
	const selectedMeal = MEALS.find((meal) => meal.id === mealId);
	return {
		headerTitle: selectedMeal.title,
		headerRight: (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item
					title="Favorite"
					iconName="ios-star"
					onPress={console.log("Mark as Favorite")}
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

export default MealsDetailScreen;
