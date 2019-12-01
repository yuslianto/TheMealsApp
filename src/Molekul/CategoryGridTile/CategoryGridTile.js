import React from "react";
import { 
    View,
    Text,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform,
    StyleSheet
} from "react-native";

const CategoryGridTile = (props) => {

    let TouchCmp = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchCmp = TouchableNativeFeedback;
    }

    return (
        <View style={styles.gridItem}>
            <TouchCmp
                style={{flex: 1}}
                onPress= {props.onSelect}
            >
                <View style={{...styles.container,...{backgroundColor: props.color}}}>
                    <Text style={styles.title}>{props.title}</Text>
                </View>
            </TouchCmp>
        </View>
    );
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: Platform.OS === 'android' && Platform.Version >= 21 
            ? 'hidden' 
            : 'visible',
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        elevation: 10,
        padding: 10,justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title: {
        fontFamily: 'Roboto-bold',
        fontSize: 22,
        textAlign: 'right'
    }
});

export default CategoryGridTile;