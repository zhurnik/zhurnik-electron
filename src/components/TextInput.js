import React from 'react';

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { textBuffer: this.props.textBuffer };
  }

  handleChange(event) {
    const newBuffer = event.target.value; 
    this.setState({ textBuffer: newBuffer });
    this.props.changeBuffer(newBuffer);
  }

  render() {
    return (
      <textarea
        className='text_input'
        onChange={this.handleChange.bind(this)}
        value={this.state.textBuffer}
      >
      </textarea>
    );
  }
}

export default TextInput;
