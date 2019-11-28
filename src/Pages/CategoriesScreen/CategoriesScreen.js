import React from "react";
import { 
    View,
    FlatList,
    Text,
    TouchableOpacity,
    StyleSheet
} from "react-native";

import { CATEGORIES } from '../../Template/data/dummy-data';

const CategoriesScreen = (props) => {
    
    const renderGridItem = (itemData) => {
        return(
            <TouchableOpacity
                onPress={()=> {
                    props.navigation.navigate({
                        routeName:'CategoryMeals', 
                        params: {
                            categoryId: itemData.item.id
                        } 
                    });
                }}
            >
                <View style={styles.gridItem}>
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
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
        alignItems: 'center',
        justifyContent: 'center'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    }
});

export default CategoriesScreen;