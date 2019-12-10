import React from "react";
import { 
    View,
    FlatList,
    StyleSheet
} from "react-native";
import { useSelector } from 'react-redux';

import MealItem from '../MealItem/MealItem';

const MealList = (props) => {

    const favoriteMeals = useSelector(status => status.meals.favoriteMeals);

    const renderMealItem = (itemData) => {
        const isFavorite = favoriteMeals.find(meal => meal.id === itemData.item.id);

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
                            mealId: itemData.item.id,
                            mealTitle: itemData.item.title,
                            isFav: isFavorite
                        }
                    })
                }}
                style={{widtth: '100%'}}
            />
        );
    };

    return (
        <View style={styles.screen}>
            <FlatList
                data = {props.listData}
                keyExtractor = {(item, index) => item.id}
                renderItem = {renderMealItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    }
});

export default MealList;