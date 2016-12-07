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
  Navigator
} from 'react-native';

import Main from './App/Components/Main'

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
      <Navigator
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
