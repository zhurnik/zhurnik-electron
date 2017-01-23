import React from 'react';

const TextInput = (props) => {
  return (
    <input
      className='text_input'
      type='textarea'
      defaultValue={props.textBuffer}
      onChange={props.changeBuffer}
    />
  );
}

export default TextInput;
