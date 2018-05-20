import React from 'react';
import { ActivityIndicator, FlatList, View, StyleSheet, Text } from 'react-native';
import Web3 from '../services/web3/web3';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      accounts: [],
      error: '',
    };
  }

  componentDidMount() {
    const web3 = new Web3('http://192.168.199.159:7545');
    web3.eth.getAccounts((error, accounts) => {
      if (error) {
        this.setState({
          isLoading: false,
          error,
        });
      }
      this.setState({
        isLoading: false,
        accounts,
      });
    });
  }

  _keyExtractor = (item, index) => `${index}`; // should not use index

  _renderItem = ({ item, index }) => <Text>{`Account #${index}:\n${item}`}</Text>;

  render() {
    return (
      <View style={styles.container}>
        {this.state.isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : this.state.error ? (
          <Text> {this.state.error} </Text>
        ) : (
          <FlatList
            data={this.state.accounts}
            renderItem={this._renderItem}
            keyExtractor={this._keyExtractor}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
