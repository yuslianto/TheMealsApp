import React from "react";
import { 
    View,
    Text,
    Button,
    StyleSheet
} from "react-native";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../Molekul/HeaderButton/HeaderButton';
import { MEALS } from '../../Template/data/dummy-data';

const MealDetailScreen = (props) => {
    const mealId = props.navigation.getParam('mealId');

    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return (
        <View style={styles.container}>
            <Text>{selectedMeal.title}</Text>
            <Button
                title="Go Back to Categories Screen"
                onPress={()=>{
                    props.navigation.popToTop()
                }}
            />
        </View>
    );
};

MealDetailScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return {
        headerTitle: selectedMeal.title,
        headerRight:(
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title='Favorite'
                    iconName="ios-star"
                    onPress={()=> {
                        console.log("favorite me")
                    }}
                />
            </HeaderButtons>
        ) 
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default MealDetailScreen;