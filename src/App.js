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
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <h1>Drowzee</h1>
            Yo!💪💪💪
          </p>
          <button
            onClick={() => {
              this.sa.begin();
              

            }}
          >Start!</button>
        </header>
      </div>
    );
  }
}

export default App;
