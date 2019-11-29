import React from "react";
import { 
    View,
    FlatList,
    StyleSheet
} from "react-native";

import { CATEGORIES } from '../../Template/data/dummy-data';
import CategoryGridTile from '../../Molekul/CategoryGridTile/CategoryGridTile';

const CategoriesScreen = (props) => {
    
    const renderGridItem = (itemData) => {
        return(
            <CategoryGridTile 
                title={itemData.item.title}
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

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meals Categories',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default CategoriesScreen;