import React from "react";
import { 
    View,
    Text,
    Button,
    StyleSheet
} from "react-native";

import { CATEGORIES } from '../../Template/data/dummy-data';

const CategoryMealScreen = (props) => {

    const catdId = props.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find( cat => cat.id === catdId) 

    return (
        <View style={styles.container}>
            <Text>This is Category Meal Screen</Text>
            <Text>{selectedCategory.title}</Text>
            <Button
                title="Go to Detail Screen"
                onPress= { () => {
                    props.navigation.navigate({routeName: 'MealDetail'});
                }}
            />
            <Button
                title="Got to Back"
                onPress= { () => {
                    props.navigation.pop()
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default CategoryMealScreen;