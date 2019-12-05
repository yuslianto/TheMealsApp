import React, {useState} from "react";
import { 
    View,
    Text,
    Switch,
    Platform,
    StyleSheet
} from "react-native";

import Colors from '../../Template/constants/Colors';


const FilterSwitch = (props) => {
    return(
        <View style={styles.filtersConatiner}>
            <Text>{props.label}</Text>
            <Switch
                trackColor={{ true: Colors.primaryColor}}
                thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
                value={props.state}
                onValueChange={props.onChange}
            />
        </View>
    )
};

const FiltersScreen = (props) => {

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters / Restrictions</Text>
            <FilterSwitch
                label="GLuten-Free"
                state={isGlutenFree}
                onChange={newValue => setIsGlutenFree(newValue)}
            />
            <FilterSwitch
                label="Lactosa-Free"
                state={isLactoseFree}
                onChange={newValue => setIsLactoseFree(newValue)}
            />
            <FilterSwitch
                label="Vegan"
                state={isVegan}
                onChange={newValue => setIsVegan(newValue)}
            />
            <FilterSwitch
                label="Vegetarian"
                state={isVegetarian}
                onChange={newValue => setIsVegetarian(newValue)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontFamily: 'Roboto-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    },
    filtersConatiner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 15
    },
});

FiltersScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Filter Meals',

    }
};

export default FiltersScreen;