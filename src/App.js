import React, { Component } from 'react';
import './App.scss';

import { SessionOrchestrator } from "./functionality/SessionOrchestrator"
/*
 *
 * This is the main component
 * 
 */

const devices = ["OpenBCI", "Muse", "MuseBridge",  "OpenBCIBridge", "Random"]

class App extends Component {
  begin() {
    this.sa = new SessionOrchestrator({
      device: this.s.value
    });
    this.sa.begin();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <h1>Drowzee</h1>
            Yo!💪💪💪
          </p>
          <select ref={s => this.s = s}>
            {devices.map(d => (
              <option value={d}>{d}</option>
            ))}
          </select>
          <button
            onClick={() => {
              this.begin()
            }}
          >Start!</button>
        </header>
      </div>
    );
  }
}

export default App;
