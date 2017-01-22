import React from 'react';

const ModeToggle = (props) => {
  return (
    <form>
      <label for="mode">Preview:</label>
      <input type='checkbox'
              checked={ props.checked }
              onChange={ props.changeMode }
      />
    </form>
  );
}

export default ModeToggle;
