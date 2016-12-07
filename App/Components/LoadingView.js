import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ActivityIndicator
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
        <ActivityIndicator size='large'/>
        <Text>Loading notes...</Text>
      </View>
    );
  }
};

export default LoadingView;
