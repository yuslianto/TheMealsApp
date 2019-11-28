import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import { useScreens } from 'react-native-screens';

import MealsNavigator from './src/Template/navigation/MealsNavigator';

useScreens();

const App = (props) => {
    return (
        <MealsNavigator/>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default App;