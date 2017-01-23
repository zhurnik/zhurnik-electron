import React from 'react';

class ModeToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: this.props.checked }
  }

  onToggle() {
    const newState = !this.state.checked;
    this.setState({checked: newState});
    this.props.changeMode(newState);
  }

  render() {
    return (
      <form>
        <label htmlFor="mode">Preview:</label>
        <input type='checkbox'
                checked={ this.state.checked }
                onChange={ () => this.onToggle() }
        />
      </form>
    );
  }
}

export default ModeToggle;
