
import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from "react-native-vector-icons/Ionicons";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Icon
          name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'}
          color="black"
          size={25}
        />
        <Button
          title="go to profile screen"
          onPress={()=>this.props.navigation.navigate('Profile')}  
        />
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
        <Button
          title="go to home screen"
          onPress={()=>this.props.navigation.navigate('Home')}  
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Profile: {
    screen: ProfileScreen,
  },
});

export default createAppContainer(AppNavigator);