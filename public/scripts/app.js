'use strict';

console.log('app.js is running');

var appInfo = {
  title: 'Visibility Toggle',
  subtitle: 'Information that should be visible',
  visible: true
};

var show = function show() {
  appInfo.visible = true;
  renderTemplate();
};

var hide = function hide() {
  appInfo.visible = false;
  renderTemplate();
};
function listOption(option) {
  if (appInfo.visible) {
    return React.createElement(
      'p',
      null,
      React.createElement(
        'p',
        null,
        appInfo.subtitle
      ),
      React.createElement(
        'button',
        { onClick: hide, className: 'button' },
        'Hide details'
      )
    );
  } else {
    return React.createElement(
      'p',
      null,
      React.createElement('p', null),
      React.createElement(
        'button',
        { onClick: show, className: 'button' },
        'Show details'
      )
    );
  }
}

var appRoot = document.getElementById('app');

var numbers = [55, 101, 1000];

var renderTemplate = function renderTemplate() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      appInfo.title
    ),
    React.createElement(
      'div',
      null,
      listOption()
    )
  );
  {/*what to render and then where to render it */}
  ReactDOM.render(template, appRoot);
};

renderTemplate();
