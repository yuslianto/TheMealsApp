import React from "react";
import { 
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    StyleSheet
} from "react-native";

const MealItem = (props) => {
    return (
        <View style={styles.mealItem}>

            <TouchableOpacity
                onPress={props.onSelectMeal}
            >
                <View>
                    <View style={{...styles.mealRow, ...styles.mealHeader}}>
                        <ImageBackground
                            source={{uri: props.image}}
                            style={styles.bgImage}
                        >
                            <View style={styles.titleContainer}>
                                <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.mealRow, ...styles.mealDetail}}>
                        <Text>{props.duration}m</Text>
                        <Text>{props.complexity.toUpperCase()}</Text>
                        <Text>{props.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 5
    },
    bgImage: {
        width: '100%',
        width: '100%',
        justifyContent: 'flex-end'
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height:'85%',
    },
    mealDetail: {
        paddingHorizontal: 10,
        //paddingVertical: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    },
    titleContainer: {

    },
    title: {
        fontFamily: 'Roboto-bold',
        fontSize: 20,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
        textAlign: 'center'

    }
});

export default MealItem;