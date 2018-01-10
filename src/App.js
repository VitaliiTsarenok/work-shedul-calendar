import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Menu from './Menu.js'
import Calendar from './Calendar.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Menu />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div><Calendar /></div>
        <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus quidem cum, consequuntur qui inventore enim amet. Earum ratione officiis voluptatibus? Amet numquam ullam doloremque nesciunt alias beatae eos praesentium vel! </div>
      </div>
    );
  }
}

export default App;
