var blueprintjs = require('style-loader!css-loader!@blueprintjs/core/dist/blueprint.css');


var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');

ReactDOM.render(
  routes,
  document.getElementById('app')
);
