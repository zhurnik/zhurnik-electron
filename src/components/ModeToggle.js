import React from 'react';

const ModeToggle = (props) => {
  return (
    <form>
      <label for="mode">Edit:</label>
      <input type='checkbox'
              checked={ props.checked }
              onChange={ props.changeMode }
      />
    </form>
  );
}

export default ModeToggle;
