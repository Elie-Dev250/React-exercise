import React from 'react';
import Webpage from './Webpage';

import Fetching from './Fetching';

function Events() {
  return (
    <Webpage>
        <div className='ele'>
      <h1>Here are some events</h1>
      <p>Welcome to the Events page. More details will be added soon.</p>
      </div>
      <Fetching/>
    </Webpage>
  );
}

export default Events;
