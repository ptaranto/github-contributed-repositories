import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { RESULT } from '../constants/Screens';
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
    title: 'HOME'
  };

  public render() {
    return (
      <View>
        <Text>HOME SCREEN</Text>
        <Button
          title="Find most successful repository"
          onPress={() => this.gotoResultScreen()}
        />
      </View>
    );
  }
  private gotoResultScreen(): void {
    const { navigation } = this.props;

    navigation.navigate(RESULT);
  }
}
