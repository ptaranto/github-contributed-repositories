import React, { Component } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { RESULT } from '../constants/Screens';
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams
} from 'react-navigation';

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

interface IState {
  username: string;
}

export default class HomeScreen extends Component<IProps, IState> {
  public static navigationOptions = {
    title: 'HOME'
  };

  public constructor(props: IProps) {
    super(props);
    this.state = { username: '' };
  }

  public render() {
    return (
      <View>
        <Text>Get repositories with contributions from user:</Text>
        <TextInput
          placeholder="Type GitHub username"
          onChangeText={text => {
            this.setState({ username: text });
          }}
        />
        <Button
          title="Find most successful repository"
          onPress={() => this.gotoResultScreen()}
        />
      </View>
    );
  }
  private gotoResultScreen(): void {
    const { navigation } = this.props;
    const { username } = this.state;

    if (username) {
      navigation.navigate(RESULT, { username: username });
    } else {
      alert('Please enter a GitHub username!');
    }
  }
}
