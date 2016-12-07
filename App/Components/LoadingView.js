import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

let styles = StyleSheet.create({
  loading: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class LoadingView extends React.Component{
  render() {
    return (
      <View style={styles.loading}>
        <ActivityIndicatorIOS size='large'/>
        <Text>Loading notes...</Text>
      </View>
    );
  }
};

export default LoadingView;
