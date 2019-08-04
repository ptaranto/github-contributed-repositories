import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams
} from 'react-navigation';

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

interface IState {}

export default class HomeScreen extends Component<IProps, IState> {
  public static navigationOptions = {
    title: 'RESULT'
  };

  public render() {
    const { navigation } = this.props;

    return (
      <View>
        <Text>RESULT SCREEN</Text>
        <Button title="New search" onPress={() => navigation.goBack()} />
      </View>
    );
  }
}
