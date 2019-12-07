import React from "react";
import { 
    View,
    Text,
    YellowBox,
    StyleSheet
} from "react-native";
import { enableScreens } from 'react-native-screens';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import MealsNavigator from './src/Template/navigation/MealsNavigator';
import mealsReducer from './src/Template/store/reducers/meals';

//enableScreens();

YellowBox.ignoreWarnings(['Warning: componentWillReceiveProps has been renamed'])

const rootReducer = combineReducers({
    meals: mealsReducer
});

const store = createStore(rootReducer);

const App = (props) => {
    return (
        <Provider store={store}>
            <MealsNavigator/>
        </Provider>
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