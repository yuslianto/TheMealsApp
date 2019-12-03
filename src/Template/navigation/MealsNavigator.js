import React from 'react';
import { Platform, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//material bottom tab get warning componentWillReceiveProps has been renamed
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from 'react-navigation-drawer';
//import { enableScreens } from 'react-native-screens';

import CategoriesScreen from '../../Pages/CategoriesScreen/CategoriesScreen';
import CategoryMealsScreen from '../../Pages/CategoryMealsScreen/CategoryMealsScreen';
import MealDetailScreen from '../../Pages/MealDetailScreen/MealDetailScreen';
import FavoritesScreen from '../../Pages/FavoritesScreen/FavoritesScreen';
import FilterScreen from '../../Pages/FiltersScreen/FiltersScreen';
import Colors from '../../Template/constants/Colors';

//enableScreens();

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: 
            Platform.OS === 'android' ? Colors.primaryColor : 'white',
    },
    headerTitleStyle: {
        fontFamily: 'Roboto-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'Roboto-light'
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
            tabBarColor: Colors.primaryColor,
            tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily:'Roboto-bold'}}>Meals</Text> : 'Meals',
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
            tabBarColor: Colors.accentColor,
            tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily:'Roboto-bold'}}>Favorites</Text> : 'Favorites',
        }
    }
};

const FiltersNavigator = createStackNavigator({
    Filters: FilterScreen
},
{
    //initialRouteName: 'Categories',
    //navigationOptions: {
    //    drawerLabel: 'Filters!!!!'
    //},
    defaultNavigationOptions: defaultStackNavOptions
});

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
        labelStyle: {
            fontFamily: 'Roboto-bold'
        },
        activeTintColor: Colors.accentColor,
        //inactiveTintColor: Colors.primaryColor,
    }
});

const MainNavigator = createDrawerNavigator({
    Mealsfavs: { 
        screen: MealsFavTabNavigator,
        navigationOptions: {
            drawerLabel: 'Meals',
        },
    },
    Filters: FiltersNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.accentColor,
        //inactiveTintColor: Colors.primaryColor,
        activeBackgroundColor: Colors.accentColor,
        //inactiveBackgroundColor: 'grey',
        labelStyle: {
            fontFamily: 'Roboto-bold'
        }
    }
});

export default createAppContainer(MainNavigator);