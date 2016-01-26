import React from 'react';

import CounterStore from '../stores/CounterStore';

import FluxCounter from './FluxCounter.react';

let getState = function() {
  return {
    count: CounterStore.getCount()
  }
}

var FluxCounterApp = React.createClass({

  mixins: [CounterStore.mixin],

  getInitialState: function() {
    return getState();
  },

  onChange: function() {
    this.setState(getState());
  },

  render: function() {
  	return (
      <div className="flux-counter-app">
        <FluxCounter count={this.state.count} />
      </div>
  	);
  }

});

module.exports = FluxCounterApp;
