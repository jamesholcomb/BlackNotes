import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

import Main from './Components/Main'
import CreateNote from './Components/CreateNote'

let styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#111111'
  },
});

export default class BlackNotes extends React.Component {
  createRoute() {
    this.refs.nav.push({
      component: CreateNote,
      title: 'New Note',
    })
  }

  render() {
    return (
      <NavigatorIOS
        ref="nav"
        style={styles.container}
        initialRoute={{
          title: 'Black Notes',
          component: Main,
          rightButtonTitle: 'Add',
          onRightButtonPress: this.createRoute.bind(this)
        }} />
    );
  }
};