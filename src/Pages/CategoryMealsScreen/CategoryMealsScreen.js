import React from "react";
import { 
    View,
    Text,
    Button,
    FlatList,
    StyleSheet
} from "react-native";

import { CATEGORIES, MEALS } from '../../Template/data/dummy-data';
import MealItem from '../../Molekul/MealItem/MealItem';

const CategoryMealScreen = (props) => {

    const catId = props.navigation.getParam('categoryId');

    const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );

    const renderMealItem = (itemData) => {
        return(
            <MealItem
                title={itemData.item.title}  
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                image={itemData.item.imageUrl}
                onSelectMeal={() => {
                    props.navigation.navigate({
                        routeName: 'MealDetail', 
                        params: {
                            mealId: itemData.item.id
                        }
                    })
                }}
                style={{widtth: '100%'}}
            />  
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data = {displayedMeals}
                keyExtractor = {(item, index) => item.id}
                renderItem = {renderMealItem}
            />
        </View>
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
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    }
});

export default CategoryMealScreen;