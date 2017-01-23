import React, { Component } from 'react';
import Dashboard from './Dashboard';
import TextPane from './TextPane'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isPreview: true};
  }

  changeMode(newMode) {
    this.setState({isPreview: newMode});
  }

  render() {
    const sampleText='# Hello Zhurnik\n\n Let\'s **be** friends!';
    return (
      <div className="App">
        <Dashboard
          displayDate='23.01.2017'
          isPreview={this.state.isPreview}
          changeMode={ (mode) => this.changeMode(mode) }
        />
        <TextPane
          textBuffer={sampleText}
          isPreview={this.state.isPreview}
        />
      </div>
    );
  }
}

export default App;
