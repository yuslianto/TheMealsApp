import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

const CategoryMealScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>This is Category Meal Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default CategoryMealScreen;