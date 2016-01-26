var React = require('react');

var FluxCounterApp = require('./components/FluxCounterApp.react');

var ImageContainer = require('./components/Image.react');

React.render(<FluxCounterApp/>, document.getElementById('flux-counter'));

React.render(<ImageContainer/>, document.getElementById('img-container'));
