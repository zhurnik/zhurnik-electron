import React, { Component } from 'react';
import Dashboard from './Dashboard';
import TextPane from './TextPane'
import './App.css';

class App extends Component {
  render() {
    const sampleText='# Hello Zhurnik\n\n Let\'s **be** friends!';
    return (
      <div className="App">
        <Dashboard
          displayDate='23.01.2017'
          isPreview={true}
        />
        <TextPane
          textBuffer={sampleText}
          isPreview={true}
        />
      </div>
    );
  }
}

export default App;
