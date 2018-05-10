// This component handles the App template used on every page.
import React, { Component } from 'react';
import Routes from '../Routes';
import Header from './common/Header';

class App extends Component {

  render() {
    return (
      <div>
        <div className="container-fluid">
          <Header />
        </div>
        <Routes />
      </div>
    );
  }
}

export default App;
