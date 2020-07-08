import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMeals from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";

import Colors from "../constant/Colors";

const MealsNavigator = createStackNavigator(
	{
		Categories: {
			screen: CategoriesScreen,
		},
		CategoryMeals: {
			screen: CategoryMeals,
		},
		MealDetail: { screen: MealDetailScreen },
	},
	{
		mode: "card",
		defaultNavigationOptions: {
			headerTintColor: Colors.darkVioletColor,
		},
	},
);

const MealsFavTabNavigator = createBottomTabNavigator(
	{
		Meals: {
			screen: MealsNavigator,
		},
		Favorites: {
			screen: FavoritesScreen,
		},
	},
	{
		tabBarOptions: {
			activeTintColor: Colors.darkVioletColor,
		},
	},
);

export default createAppContainer(MealsFavTabNavigator);
