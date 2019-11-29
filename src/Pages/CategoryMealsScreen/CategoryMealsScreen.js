import React from "react";
import { 
    View,
    Text,
    Button,
    FlatList,
    StyleSheet
} from "react-native";

import { CATEGORIES, MEALS } from '../../Template/data/dummy-data';

const CategoryMealScreen = (props) => {

    const catId = props.navigation.getParam('categoryId');

    const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );

    const renderMealItem = (itemData) => {
        return(
            <View>
                <Text>{itemData.item.title}</Text>
            </View>
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
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default CategoryMealScreen;