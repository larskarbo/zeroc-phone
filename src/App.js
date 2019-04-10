import React, { Component } from 'react';
import './App.scss';

import { SessionOrchestrator } from "./functionality/SessionOrchestrator"
/*
 *
 * This is the main component
 * 
 */

class App extends Component {
  componentDidMount() {
    this.sa = new SessionOrchestrator();
    this.sa.begin();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Heisan!💪💪💪
          </p>
          <button
            onClick={() => {
            }}
          >Start!</button>
        </header>
      </div>
    );
  }
}

export default App;
