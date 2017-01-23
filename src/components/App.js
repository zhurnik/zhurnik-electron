import React, { Component } from 'react';
import Dashboard from './Dashboard';
import TextPane from './TextPane'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPreview: true,
      textBuffer: '# Hello Zhurnik\n\n Let\'s **be** friends!'
    };
  }

  changeMode(newMode) {
    this.setState({ isPreview: newMode });
  }

  changeBuffer(newBuffer) {
    this.setState({ textBuffer: newBuffer });
  }

  render() {
    return (
      <div className="App">
        <Dashboard
          displayDate='23.01.2017'
          isPreview={this.state.isPreview}
          changeMode={ (mode) => this.changeMode(mode) }
        />
        <TextPane
          textBuffer={this.state.textBuffer}
          isPreview={this.state.isPreview}
          changeBuffer={ (buffer) => this.changeBuffer(buffer) }
        />
      </div>
    );
  }
}

export default App;
