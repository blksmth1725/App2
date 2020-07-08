import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMeals from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

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

export default createAppContainer(MealsNavigator);
