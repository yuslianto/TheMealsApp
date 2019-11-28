import React from "react";
import { 
    View,
    Text,
    Button,
    Platform,
    StyleSheet
} from "react-native";

import { CATEGORIES } from '../../Template/data/dummy-data';
import Colors from '../../Template/constants/Colors';

const CategoryMealScreen = (props) => {

    const catId = props.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find( cat => cat.id === catId) 

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

CategoryMealScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find( cat => cat.id === catId);

    return{
        headerTitle: selectedCategory.title,
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
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