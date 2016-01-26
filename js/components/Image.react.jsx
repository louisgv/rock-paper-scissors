'use strict';

import React from 'react';

class Image extends React.Component {
  let user = {
    name: 'Louis',
    city: 'Seattle'
  };
  render() {

    return (
      <div>
        <p>
          {this.user.name}
        </p>
        {/*/
          <img src={mainImg} alt='Louis'/>
        */}
      </div>
    );
  }
}

// Image.defaultProps = {};

export default Image;
