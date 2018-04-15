import React, { Component } from 'react';
import './css/App.css';

import MainContainer from './containers/main-container/main-container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainContainer />
      </div>
    );
  }
}

export default App;
