import React from "react";
import { 
    View,
    Text,
    Button,
    StyleSheet
} from "react-native";

const CategoriesScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>This is Categories Screen</Text>
            <Button
                title="Got to Meals"
                onPress= { () => {
                    props.navigation.navigate({routeName: 'CategoryMeals'})
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

export default CategoriesScreen;