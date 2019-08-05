import React, { Component } from 'react';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';
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
      <View style={styles.container}>
        <Text style={styles.label}>
          Get repositories with contributions from user:
        </Text>
        <TextInput
          style={styles.input}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    fontSize: 18,
    margin: 5
  },
  input: {
    borderWidth: 1,
    width: 300,
    height: 40,
    margin: 5
  },
  button: {
    backgroundColor: '#ff0000'
  }
});
