import * as firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCxB9T_Ul5LZsjce11p9K6HnO-xOGn72f0",
    authDomain: "blacknotes-2c1ab.firebaseapp.com",
    databaseURL: "https://blacknotes-2c1ab.firebaseio.com",
    storageBucket: "blacknotes-2c1ab.appspot.com",
    messagingSenderId: "594814243793"
  };

const ref = firebase.initializeApp(config);

let jsonURL = `${config.databaseURL}.json`;

let api = {
  getNotes() {
    return fetch(jsonURL).then((res) => res.json())
  },
  addNote(text, title) {
    ref.push({title: title, body: text});
  },
  updateNote(title, text, id) {
    ref.child(id).set({title: title, body: text});
  },
  deleteNote(text, id) {
    ref.child(id).remove();
  }
};

export default api;

