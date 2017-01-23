import React from 'react';
import ReactMarkdown from 'react-markdown';
import TextInput from './TextInput';

const TextPane = (props) => {
  return (
    <div className='text_pane'>
      {props.isPreview ?
        <ReactMarkdown
          className='react_markdown'
          source={props.textBuffer} /> :
        <TextInput
          className='text_input'
          textBuffer={props.textBuffer}
          changeBuffer={ (buffer) => props.changeBuffer(buffer) } />
      }
    </div>
  );
}

export default TextPane;
