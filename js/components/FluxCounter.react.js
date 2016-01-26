import React from 'react';
import FluxCounterActions from '../actions/FluxCounterActions';

class FluxCounter extends React.Component {

  countOne() {
    FluxCounterActions.countOne();
  }

  render() {
    return (
      <div className="flux-counter">
        <p>{this.props.count}</p>
        <button type="button" onClick={this.countOne}>test</button>
      </div>
    );
  }
}

module.exports = FluxCounter;
