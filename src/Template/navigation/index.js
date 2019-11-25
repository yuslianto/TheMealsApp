import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

import { RootNavigators } from './RootNavigators';

const App = (props) => {
    return (
        <View style={styles.container}>
            <RootNavigators/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
});

export default App;