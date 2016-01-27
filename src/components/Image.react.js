"use strict";

import React, {Component} from "react";

import Radium from "radium";

import Appbar from "muicss/lib/react/appbar";

import Button from "muicss/lib/react/button";

// import color from "color";

let styles = {
  base: {
    background: "white",
    color: "#fff",
    width: "100%",
    height: "33%",
    textAlign: "center",
    transitionDuration: "1s",
    // Adding interactive state couldn"t be easier! Add a special key to your
    // style object (:hover, :focus, :active, or @media) with the additional rules.
    ":hover": {
      "background": "tan"
    }
  },
  img: {
    width: "33%",
    height: "33%"
  },
  button: {
    width: "81%"
  },
  primary: {
    background: "#0074D9"
  },
  warning: {
    background: "#FF4136"
  }
};

let imgs = ["./imgs/r.png", "./imgs/p.png", "./imgs/s.png"];

class ImageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosen: props.initialChosen
    };
  }

  randomize() {
    this.setState({
      chosen: Math.floor(Math.random(0) * imgs.length)
    });
  }

  render() {

    // console.log(Picture);

    return (
      <div>
        <Appbar></Appbar>

        <div key="one" style={[styles.base]}>
          <img style={[styles.img]} src={imgs[this.state.chosen]}/>
        </div>
        <div key="two" style={[styles.base]}>
          <Button style={styles.button} color="primary" onClick={this
            .randomize
            .bind(this)}>
            Randomize
          </Button>
        </div>
      </div>
    );
  }
}

ImageContainer.propTypes = {
  initialChosen: React.PropTypes.number
};
ImageContainer.defaultProps = {
  initialChosen: 0
};

ImageContainer = Radium(ImageContainer);

export default ImageContainer;
