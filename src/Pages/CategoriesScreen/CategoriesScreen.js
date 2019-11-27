import React from "react";
import { 
    View,
    FlatList,
    Text,
    TouchableOpacity,
    Platform,
    StyleSheet
} from "react-native";

import { CATEGORIES } from '../../Template/data/dummy-data';
import Colors from '../../Template/constants/Colors';

const CategoriesScreen = (props) => {
    
    const renderGridItem = (itemData) => {
        return(
            <TouchableOpacity
                onPress={()=> {
                    props.navigation.navigate('CategoryMeals')
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
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
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