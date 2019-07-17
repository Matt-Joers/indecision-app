'use strict';

console.log('app.js is running');

var appInfo = {
  title: 'Hello there',
  subtitle: 'subtitle text',
  options: ['one', 'two']
};

function listOption(option) {
  if (appInfo.options && appInfo.options.length > 0) {
    return React.createElement(
      'p',
      null,
      'Here are your options: ',
      appInfo.options
    );
  } else {
    return React.createElement(
      'p',
      null,
      'No options are available'
    );
  }
}

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    appInfo.title
  ),
  appInfo.subtitle && React.createElement(
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
  ),
  listOption(appInfo.options),
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'anonymous'
  ),
  user.age && user.age > 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
