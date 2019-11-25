import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

const MealDetailScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>This is Meal Detail Screen</Text>
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

export default MealDetailScreen;