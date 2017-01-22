import React from 'react';
import DateInput from './DateInput'
import ModeToggle from './ModeToggle'

const Dashboard = (props) => {
  return (
    <div className='dashboard'>
      <DateInput displayDate={props.displayDate} changeDate={props.changeDate} />
      <ModeToggle checked={props.isPreview} changeMode={props.changeMode} />
    </div>
  );
}

export default Dashboard;
