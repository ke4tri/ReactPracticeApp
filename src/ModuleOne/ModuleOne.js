import React from 'react';

import './ModuleOne.scss';

class ModuleOne extends React.Component {
 
  render() {
  
    return(
      <div className='buttonOne'>
        <h1 className='text display-4'>Fast. Flexible.</h1>
        <h1 className='text display-4'>Staffing Reinvented</h1>
        <p className='text .text-light'>We use technology to source the best workers for your needs</p>
        <button type="button" class="btn btn-warning" onclick="myFunction()">Fill Your Shift in Minutes</button>
      </div>
    );
  }
  
  };
  
  export default ModuleOne;