import React from 'react';

const DateInput = (props) => {
  return (
    <form onSubmit={ props.changeDate } >
      <input type='text'
             className='date_input'
             defaultValue={props.displayDate}
      />
      <input type='submit' style={{display: 'none'}} />
    </form>
  );
}

export default DateInput;
