import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../src/components/Header';
import MessageList from './components/MessageList';
import MessageBox from './components/MessageBox';
import firebase from 'firebase';

class App extends Component {
  constructor(props){
    super(props);
    var config = {
    apiKey: "AIzaSyB8C_2lWsSsJ9PqtbXJbjKYzcozABUe960",
    authDomain: "workshop-message.firebaseapp.com",
    databaseURL: "https://workshop-message.firebaseio.com",
    projectId: "workshop-message",
    storageBucket: "workshop-message.appspot.com",
    messagingSenderId: "59181858300"

    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <div >
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        </div>
      <div className="container">
      
      <h1 align="center" className="App-title">กล่องข้อความ อิอิ</h1>
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-6">
          <MessageList db={firebase} />
        </div>
      </div>
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-6">
          <MessageBox db={firebase} />
        </div>
      </div>
   </div>
   </div>
    );
  }
}

export default App;
