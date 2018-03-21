import React, { Component } from 'react';

import Header from './Header';
import Design from './Design'

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Design />
      </div>
    );
  }
}
