import React, { Component } from 'react';

import Header from './Header';
import Design from './Design';
import Features from './Features';
import Responsive from './Responsive';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Design />
          <Features />
          <Responsive />
        </main>
      </div>
    );
  }
}
