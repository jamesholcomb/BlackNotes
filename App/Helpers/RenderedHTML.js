import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';

export default class RenderedHTML extends React.Component{
  createMarkUp() {
    return {__html: 'First &middot; Second'};
  }

  render() {
    return (
      <Text
        className='RenderedHTML'
        dangerouslySetInnerHTML={this.createMarkUp()} />

    );
  }
};
