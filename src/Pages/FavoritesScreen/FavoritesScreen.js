import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

const FavoritesScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>This is Favorites Screen</Text>
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

export default FavoritesScreen;