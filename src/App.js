import React, { Component } from 'react';
import CoolTextArea from './components/CoolTextArea';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         <CoolTextArea minrows={4} maxrows={10} />
      </div>
    );
  }
}

export default App;
