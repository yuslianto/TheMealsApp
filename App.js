import React from "react";
import { 
  View,
  Text,
  Platform,
  StyleSheet
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

const App = (props) => {
  return (
    <View style={styles.container}>
      <Text>App screen</Text>
      <Icon
        name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'}
        color="black"
        size={25}
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

export default App;