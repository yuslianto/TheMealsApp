import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//material bottom tab get warning componentWillReceiveProps has been renamed
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import { enableScreens } from 'react-native-screens';

import CategoriesScreen from '../../Pages/CategoriesScreen/CategoriesScreen';
import CategoryMealsScreen from '../../Pages/CategoryMealsScreen/CategoryMealsScreen';
import MealDetailScreen from '../../Pages/MealDetailScreen/MealDetailScreen';
import FavoritesScreen from '../../Pages/FavoritesScreen/FavoritesScreen';
import Colors from '../../Template/constants/Colors';

//enableScreens();

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: 
            Platform.OS === 'android' ? Colors.primaryColor : 'white',
    },
    headerTintColor: 
        Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    headerTitle: 'A Screen',
};

const MealsNavigator = createStackNavigator({
    Categories : { 
        screen: CategoriesScreen,
    },
    CategoryMeals : {
        screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
}, {
    //initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions
});

const FavNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
}, {
    //initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions
});

const tabScreenConfig = {
    Meals: { 
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return(
                    <Ionicons 
                        name='ios-restaurant' 
                        size={25} 
                        color={tabInfo.tintColor}
                    />
                );
            },
            tabBarColor: Colors.primaryColor
        }
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return(
                    <Ionicons 
                        name='ios-star' 
                        size={25} 
                        color={tabInfo.tintColor}
                    />
                );
            },
            tabBarColor: Colors.accentColor
        }
    }
};

const MealsFavTabNavigator = 
    Platform.OS === 'android' 
    //material bottom tab get warning componentWillReceiveProps has been renamed
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: 'white',
        shifting: true,
        barStyle: {
            backgroundColor: Colors.primaryColor
        }
    })
    : createBottomTabNavigator(tabScreenConfig, {
    tabBarOptions: {
        activeTintColor: Colors.accentColor,
        //inactiveTintColor: Colors.primaryColor,
    }
});

export default createAppContainer(MealsFavTabNavigator);