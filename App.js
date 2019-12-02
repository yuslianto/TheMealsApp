import React from "react";
import { 
    View,
    Text,
    YellowBox,
    StyleSheet
} from "react-native";
import { enableScreens } from 'react-native-screens';

import MealsNavigator from './src/Template/navigation/MealsNavigator';

//enableScreens();

YellowBox.ignoreWarnings(['Warning: componentWillReceiveProps has been renamed'])

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