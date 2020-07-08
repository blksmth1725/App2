import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CategoryGridTile = (props) => {
	return (
		<View style={styles.gridItem}>
			<TouchableOpacity style={{ flex: 1 }} onPress={props.onSelect}>
				<View
					style={{
						...styles.container,
						...{ backgroundColor: props.color },
					}}
				>
					<Text style={styles.title} numberOfLines={2}>
						{props.title}
					</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		margin: 15,
		height: 150,
	},
	container: {
		flex: 1,
		borderRadius: 15,
		shadowColor: "black",
		shadowOpacity: 0.35,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 10,
		elevation: 3,
		padding: 15,
		justifyContent: "flex-end",
		alignItems: "center",
	},
	title: {
		fontFamily: "open-sans-bold",
		fontSize: 16,
	},
});

export default CategoryGridTile;
