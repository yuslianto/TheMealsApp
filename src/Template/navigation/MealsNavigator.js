import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../../Pages/CategoriesScreen/CategoriesScreen';
import CategoryMealsScreen from '../../Pages/CategoryMealsScreen/CategoryMealsScreen';
import MealDetailScreen from '../../Pages/MealDetailScreen/MealDetailScreen';

const MealsNavigator = createStackNavigator({
    Categories : CategoriesScreen,
    CategoryMeals : {
        screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
});

export default createAppContainer(MealsNavigator);