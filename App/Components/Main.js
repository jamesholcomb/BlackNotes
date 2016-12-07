import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';

import Notes from './Notes.js'
import CreateNote from './CreateNote'

let styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  margin: {
    marginTop: 50,
  },
  footerContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
});

class Main extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.margin}/>
        <Notes
          navigator={this.props.navigator} />
      </View>
    )
  }

};

export default Main;
