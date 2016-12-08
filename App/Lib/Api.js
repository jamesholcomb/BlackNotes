import Rebase from 're-base'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCxB9T_Ul5LZsjce11p9K6HnO-xOGn72f0",
  authDomain: "blacknotes-2c1ab.firebaseapp.com",
  databaseURL: "https://blacknotes-2c1ab.firebaseio.com",
  storageBucket: "blacknotes-2c1ab.appspot.com",
  messagingSenderId: "594814243793"
};

const base = Rebase.createClass(config);

export default api = ({
  getNotes() {
    return base.fetch('notes', {
      context: this,
      asArray: true
    });
  },
  addNote(text, title) {
    return base.push('notes', {
      data: { title: title, body: text }
    });
  },
  updateNote(title, text, key) {
    return base.update(`notes/${key}`, {
      title: title, body: text
    });
  },
  deleteNote(key) {
    return base.remove(`notes/${key}`);
  }
});