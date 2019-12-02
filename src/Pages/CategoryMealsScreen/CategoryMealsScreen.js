import React from "react";
import { 
    View,
    Text,
    Button,
    FlatList,
    StyleSheet
} from "react-native";

import { CATEGORIES, MEALS } from '../../Template/data/dummy-data';
import MealList from '../../Molekul/MealList/MealList';

const CategoryMealScreen = (props) => {

    const catId = props.navigation.getParam('categoryId');

    const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );

    return (
        <MealList
            listData={displayedMeals}
            navigation={props.navigation}
        />
    );
};

CategoryMealScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find( cat => cat.id === catId);

    return{
        headerTitle: selectedCategory.title,
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    }
});

export default CategoryMealScreen;