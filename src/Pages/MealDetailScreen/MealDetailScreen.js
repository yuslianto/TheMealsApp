import React, {useEffect} from "react";
import { 
    View,
    Text,
    ScrollView,
    Image,
    StyleSheet
} from "react-native";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import HeaderButton from '../../Molekul/HeaderButton/HeaderButton';
import { MEALS } from '../../Template/data/dummy-data';
import DefaultText from '../../Atom/DefaultText/DefaultText';


const ListItem = (props) => {
    return(
        <View style={styles.ListItem}>
            <DefaultText>{props.children}</DefaultText>
        </View>
    )
};

const MealDetailScreen = (props) => {
    const availableMeals = useSelector(state => state.meals.meals);

    const mealId = props.navigation.getParam('mealId');

    const selectedMeal = availableMeals.find(meal => meal.id === mealId);

    //useEffect(() => {
    //    props.navigation.setParams({mealTitle: selectedMeal.title});
    //
    //}, [selectedMeal]);


    return (
        <ScrollView>
            <Image
                source={{uri: selectedMeal.imageUrl}}
                style={styles.image}
            />
            <View style={styles.details}>
                <DefaultText>{selectedMeal.duration}m</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map(ingredient => (
                <ListItem key={ingredient}>{ingredient}</ListItem>
            ))}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map(step => (
                <ListItem key={step}>{step}</ListItem>
            ))}
        </ScrollView>
    );
};

MealDetailScreen.navigationOptions = (navigationData) => {
    //const mealId = navigationData.navigation.getParam('mealId');
    //const selectedMeal = MEALS.find(meal => meal.id === mealId);
    const mealTitle = navigationData.navigation.getParam('mealTitle');
    return {
        headerTitle: mealTitle,
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
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    title: {
        fontFamily: 'Roboto-bold',
        fontSize: 22,
        textAlign: 'center'
    },
    ListItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
});

export default MealDetailScreen;