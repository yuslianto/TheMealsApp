import React from "react";
import { 
    View,
    FlatList,
    StyleSheet
} from "react-native";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../Molekul/HeaderButton/HeaderButton';
import { CATEGORIES } from '../../Template/data/dummy-data';
import CategoryGridTile from '../../Molekul/CategoryGridTile/CategoryGridTile';

const CategoriesScreen = (props) => {
    
    const renderGridItem = (itemData) => {
        return(
            <CategoryGridTile 
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect = {()=> {
                    props.navigation.navigate({
                        routeName:'CategoryMeals', 
                        params: {
                            categoryId: itemData.item.id
                        } 
                    });
                }}
                color={itemData.item.color}
            />
        )
    }

    return (
        <FlatList
            data={CATEGORIES}
            numColumns={2}
            renderItem={renderGridItem}
            keyExtractor={(item, index)=>item.id}
        />
    );
};

CategoriesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Meals Categories',
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
    container: {
        flex: 1,
    },
});

export default CategoriesScreen;