import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams
} from 'react-navigation';
import { GraphQLClient } from 'graphql-request';
import { IRepository } from '../graphql/ResponseInterfaces';
import { GITHUB_TOKEN } from '../graphql/Token';
import { getUserContributedRepositories } from '../graphql/Queries';
import { processRepositories } from '../graphql/Response';

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

interface IState {
  isLoading: boolean;
  repositories: IRepository[];
}

export default class HomeScreen extends Component<IProps, IState> {
  public static navigationOptions = {
    title: 'RESULT'
  };
  private graphqlClient = new GraphQLClient('https://api.github.com/graphql', {
    headers: {
      authorization: `Bearer ${GITHUB_TOKEN}`
    }
  });

  public componentWillMount() {
    const { navigation } = this.props;
    const username = navigation.getParam('username');

    this.setState({ ...this.state, isLoading: true });
    this.graphqlClient
      .request(getUserContributedRepositories, {
        username: username
      })
      .then(data => {
        const processedRepositories = processRepositories(data);
        this.setState({
          ...this.state,
          isLoading: false,
          repositories: processedRepositories
        });
      });
  }

  public render() {
    const { navigation } = this.props;
    const username = navigation.getParam('username');

    return (
      <View>
        <Text>RESULT SCREEN</Text>
        <Text>{`GitHub username: ${username}`}</Text>
        <Text>{`User repositories:`}</Text>
        {this.state.isLoading ? (
          <Text>Loading...</Text>
        ) : (
          this.state.repositories.map(item => (
            <Text key={item.nameWithOwner}>{`${item.stargazers.totalCount} - ${
              item.name
            }`}</Text>
          ))
        )}

        <Button title="New search" onPress={() => navigation.goBack()} />
      </View>
    );
  }
}
