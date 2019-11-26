import React from "react";
import { 
    View,
    Text,
    Button,
    StyleSheet
} from "react-native";

const CategoryMealScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>This is Category Meal Screen</Text>
            <Button
                title="Go to Detail Screen"
                onPress= { () => {
                    props.navigation.navigate({routeName: 'MealDetail'});
                }}
            />
            <Button
                title="Got to Back"
                onPress= { () => {
                    props.navigation.pop()
                }}
            />
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