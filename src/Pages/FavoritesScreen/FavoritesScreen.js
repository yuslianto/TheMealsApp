import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../Molekul/HeaderButton/HeaderButton';
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
FavoritesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Your Favorites',
        headerLeft:(
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="menu"
                    iconName="ios-menu"
                    onPress={()=> {
                        //toggle drawer method
                        navData.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>
        ) 

    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default FavoritesScreen;