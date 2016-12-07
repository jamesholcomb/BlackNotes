/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

import Main from './App/Components/Main'
import CreateNote from './App/Components/CreateNote'

let styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#111111'
  },
});

class BlackNotes extends React.Component {
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

AppRegistry.registerComponent('BlackNotes', () => BlackNotes);
