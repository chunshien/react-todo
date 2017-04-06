var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');


//load foundation
//require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

require('style!css!sass!applicationStyles');


ReactDOM.render(
  <p>Boiler plate 3</p>,
  document.getElementById('app')
);
