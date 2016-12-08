import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TextInput,
  ListView,
  TouchableHighlight
} from 'react-native'

import ViewNote from './ViewNote'
import api from './../Lib/Api'
import Separator from './../Helpers/Separator'
import Swipeout from 'react-native-swipe-out'
import EmptyView from './EmptyView'
import LoadingView from './LoadingView'
import { filter, indexOf, invert, findKey } from 'lodash'

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    height: 590,
  },
  rowContainer: {
    padding: 10,
  },
  note: {
    flex: 2,
    fontSize: 22,
    padding: 15,
  },
  searchBar: {
    paddingLeft: 30,
    fontSize: 22,
    height: 10,
    flex: .1,
    borderWidth: 9,
    borderColor: '#E4E4E4',
  },
});

class Item extends React.Component {
  render() {
    return (
      <View style={styles.rowContainer}>
        <Text style={styles.note}> {this.props.title} </Text>
      </View>
    )
  }
}

class Notes extends React.Component {
  constructor(props) {
    super(props);

    this.ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 })
    this.state = {
      isLoading: true,
      empty: false,
      rawData: {},
      note: '',
      error: '',
      searchText: '',
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate() {
    if (this.state.searchText === '') {
      this.fetchData();
    }
  }

  filterNotes(searchText, notes) {
    let text = searchText.toLowerCase();
    return filter(notes, (n) => {
      let note = n.body.toLowerCase();
      return note.search(text) !== -1;
    });
  }

  fetchData() {
    api.getNotes()
      .then((data) => {
        this.setState({
          dataSource: this.ds.cloneWithRows(data),
          isLoading: false,
          empty: false,
          rawData: data,
        });
      })
      .catch((error) => {
        console.log(error)
        this.setState({
          empty: true,
          isLoading: false,
        });
      });
  }

  setSearchText(e) {
    let searchText = e.nativeEvent.text;
    this.setState({ searchText });

    api.getNotes()
      .then((data) => {
        let filteredData = this.filterNotes(searchText, data.slice());
        this.setState({
          dataSource: this.ds.cloneWithRows(filteredData),
          rawData: filteredData,
        });
      })
  }

  renderRow(rowData) {
    let swipeBtns = [{
      text: 'Delete',
      backgroundColor: 'red',
      underlayColor: 'rgba(0, 0, 0, 0.6)',
      onPress: () => { this.deleteNote(rowData) }
    }];

    return (
      <Swipeout right={swipeBtns}
        key={rowData.key}
        autoClose
        backgroundColor='transparent'
      >
        <TouchableHighlight
          underlayColor='rgba(192,192,192,0.6)'
          onPress={this.viewNote.bind(this, rowData)} >
          <View>
            <Item title={rowData.title} />
            <Separator />
          </View>
        </TouchableHighlight>
      </Swipeout>
    )
  }

  deleteNote(rowData) {
    this.setState({ searchText: '' });

    api.deleteNote(rowData.key).then((res) => {      
      console.log(`Deleted note ${res}`)
      this.fetchData();
    })
  }

  share(noteText) {
    ShareManager.note(noteText);
  }

  viewNote(rowData) {
    this.props.navigator.push({
      component: ViewNote,
      title: rowData.title,
      rightButtonTitle: 'Share',
      onRightButtonPress: () => this.share(rowData.body),
      passProps: {
        noteText: rowData.body,
        noteTitle: rowData.title,
        //noteId: this.noteId(rowData),
        noteKey: rowData.key
      }
    });
  }

  // noteId(note) {
  //   let rawData = this.state.rawData;
  //   return findKey(rawData, note)
  // }

  render() {
    if (this.state.isLoading) {
      return <LoadingView />
    }

    if (this.state.empty) {
      return <EmptyView />
    }

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.searchBar}
          value={this.state.searchText}
          onChange={this.setSearchText.bind(this)}
          placeholder="Search" />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)} />
      </View>
    )
  }
};

export default Notes;

