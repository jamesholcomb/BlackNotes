import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';

let styles = StyleSheet.create({
  separator: {
    height: 1,
    width: 400,
    backgroundColor: '#E4E4E4',
    marginLeft: 15,
  },
});

export default class Separator extends React.Component{
  render() {
    return (
      <View style={styles.separator} />
    );
  }
};

