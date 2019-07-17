'use strict';

console.log('app.js is running');

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Matt Joers is writing a React App'
  ),
  React.createElement(
    'p',
    null,
    'This is some info'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'one'
    ),
    React.createElement(
      'li',
      null,
      'two'
    )
  )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
