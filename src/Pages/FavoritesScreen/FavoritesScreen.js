import React from "react";
import { 
    StyleSheet,
    View
} from "react-native";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import HeaderButton from '../../Molekul/HeaderButton/HeaderButton';
import MealList from '../../Molekul/MealList/MealList';
import DefaultText from '../../Atom/DefaultText/DefaultText';

const FavoritesScreen = (props) => {

    const favMeals = useSelector(state => state.meals.favoriteMeals);

    if (favMeals.length === 0 || !favMeals) {
        return(
            <View style={styles.content}>
                <DefaultText>No favorite meals found. Start adding some !!!</DefaultText>
            </View>
        );
    }

    return <MealList listData={favMeals} navigation={props.navigation}/>

};
FavoritesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Your Favorites',
        headerLeft:(
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="menu"
                    iconName="ios-menu"
                    onPress={()=> {
                        //toggle drawer method
                        navData.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>
        ) 

    }
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default FavoritesScreen;