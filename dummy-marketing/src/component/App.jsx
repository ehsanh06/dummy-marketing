import React, { Component } from 'react';

import Header from './Header';
import Design from './Design';
import Features from './Features';
import Responsive from './Responsive';
import Founders from './Founders';
import Showcase from './Showcase';
import Trial from './Trial';
import Footer from './Footer';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Design />
          <Features />
          <Responsive />
          <Founders />
          <Showcase />
        </main>
        <Footer />
      </div>
    );
  }
}
