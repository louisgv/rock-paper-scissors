'use strict';

import React from 'react';

// TODO: MAKE SHIT HAPPEN
class AppComponent extends React.Component {
  render() {
    var user = {
      name: 'Louis',
      city: 'Seattle'
    };

    return (
      <div className='index'>
        <img src={mainImg} alt='Louis'/>
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
