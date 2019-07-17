'use strict';

console.log('app.js is running');

var appInfo = {
  title: 'Hello there',
  subtitle: 'subtitle text'
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    appInfo.title
  ),
  React.createElement(
    'p',
    null,
    appInfo.subtitle
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

var user = {
  name: 'Matt',
  age: 32,
  location: 'Wisconsin'
};

var userName = 'Matthew';
var userAge = 32;
var userLocation = 'Ashippun';

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    user.location
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
