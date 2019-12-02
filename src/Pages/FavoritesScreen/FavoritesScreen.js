import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

import MealList from '../../Molekul/MealList/MealList';
import { MEALS } from '../../Template/data/dummy-data';

const FavoritesScreen = (props) => {
    const favMeals = MEALS.filter( 
        meal => meal.id === 'm1' || meal.id === 'm2'
    );

    return (
        <MealList
            listData={favMeals}
            navigation={props.navigation}
        />
    );
};
FavoritesScreen.navigationOptions = {
    headerTitle: 'Your Favorites'
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default FavoritesScreen;