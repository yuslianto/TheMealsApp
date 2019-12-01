import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import { enableScreens } from 'react-native-screens';

import CategoriesScreen from '../../Pages/CategoriesScreen/CategoriesScreen';
import CategoryMealsScreen from '../../Pages/CategoryMealsScreen/CategoryMealsScreen';
import MealDetailScreen from '../../Pages/MealDetailScreen/MealDetailScreen';
import FavoritesScreen from '../../Pages/FavoritesScreen/FavoritesScreen';
import Colors from '../../Template/constants/Colors';

//enableScreens();

const MealsNavigator = createStackNavigator({
    Categories : { 
        screen: CategoriesScreen,
    },
    CategoryMeals : {
        screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
}, {
    initialRouteName: 'Categories',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 
                Platform.OS === 'android' ? Colors.primaryColor : 'white',
        },
        headerTintColor: 
            Platform.OS === 'android' ? 'white' : Colors.primaryColor,
        headerTitle: 'A Screen',
    }
});

const MealsFavTabNavigator = createBottomTabNavigator({
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
            }
        }
    },
    Favorites: {
        screen: FavoritesScreen,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return(
                    <Ionicons 
                        name='ios-star' 
                        size={25} 
                        color={tabInfo.tintColor}
                    />
                );
            }
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: Colors.accentColor,
        //inactiveTintColor: Colors.primaryColor,
    }
});

export default createAppContainer(MealsFavTabNavigator);