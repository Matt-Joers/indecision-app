'use strict';

console.log('app.js is running');

var appInfo = {
  title: 'Indecision App',
  subtitle: 'Create a list of To-dos and then click "what should I do?"',
  options: []
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
var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;

  if (option) {
    appInfo.options.push(option);
    e.target.elements.option.value = '';
    renderTemplate();
  }
};

var removeAll = function removeAll() {
  appInfo.options = [];
  renderTemplate();
};

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * appInfo.options.length);
  var option = appInfo.options[randomNum];
  alert(option);
};

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
    appInfo.subtitle && React.createElement(
      'p',
      null,
      appInfo.subtitle
    ),
    React.createElement(
      'button',
      { disabled: appInfo.options.length === 0, onClick: onMakeDecision },
      'What should I do?'
    ),
    React.createElement(
      'button',
      { onClick: removeAll, className: 'button' },
      'Remove All'
    ),
    React.createElement(
      'ol',
      null,
      appInfo.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          option
        );
      })
    ),
    listOption(appInfo.options),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

renderTemplate();
