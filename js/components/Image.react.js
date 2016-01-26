"use strict";

import React from "react";

// TODO: MAKE SHIT HAPPEN
class ImageContainer extends React.Component {

  render() {

    let user = {
      name: "Louis",
      city: "Seattle"
    };

    return (
      <div className="index">
        {user.name}
      </div>
    );
  }
}

ImageContainer.defaultProps = {};

export default ImageContainer;
