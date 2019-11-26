import React from "react";
import { 
    View,
    FlatList,
    Text,
    StyleSheet
} from "react-native";

import { CATEGORIES } from '../../Template/data/dummy-data';

const renderGridItem = (itemData) => (
    <View style={styles.gridItem}>
        <Text>{itemData.item.title}</Text>
    </View>
)

const CategoriesScreen = (props) => {
    return (
        <FlatList
            data={CATEGORIES}
            numColumns={2}
            renderItem={renderGridItem}
            keyExtractor={(item, index)=>item.id}
        />
    );
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