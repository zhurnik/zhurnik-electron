import React from 'react';
import ReactMarkdown from 'react-markdown';
import TextInput from './TextInput';

const TextPane = (props) => {
  return (
    <div className='text_pane'>
      {props.isPreview ?
          <ReactMarkdown textBuffer={props.textBuffer} /> :
          <TextInput textBuffer={props.textBuffer} onChange={props.handleTextChange} />
      }
    </div>
  );
}

export default TextPane;
