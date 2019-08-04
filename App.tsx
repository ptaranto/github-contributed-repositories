import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from './src/components/HomeScreen';
import ResultScreen from './src/components/ResultScreen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Result: ResultScreen
  },
  {
    initialRouteName: 'Home'
  }
);
const AppContainer = createAppContainer(AppNavigator);

export function App() {
  return (
    <View>
      <AppContainer />
    </View>
  );
}

export default AppContainer;
