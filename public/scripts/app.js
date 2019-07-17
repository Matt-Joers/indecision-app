'use strict';

// console.log('app.js is running');

// const appInfo = {
//   title: 'Hello there',
//   subtitle: 'subtitle text',
//   options: ['one', 'two'] 
// }

// function listOption(option) {
//   if (appInfo.options && appInfo.options.length > 0) {
//     return <p>Here are your options: {appInfo.options}</p>
//   } else {
//     return <p>No options are available</p>
//   }
// }

// const template = (
//   <div>
//     <h1>{appInfo.title}</h1>
//     {appInfo.subtitle && <p>{appInfo.subtitle}</p>}
//     <ol>
//       <li>one</li>
//       <li>two</li>
//     </ol>
//     {listOption(appInfo.options)}
//     {/* 
//     This could've been used as well for conditional rendering:
//     <p>{app.options.length > 0 ? 'Here are your options' : 'no options'}</p>
//     */}
//   </div>
//   );

var count = 0;

var increment = function increment() {
  count = count + 1;
  console.log(count + 1);
  renderCounterApp();
};

var decrement = function decrement() {
  count = count - 1;
  console.log(count - 1);
  renderCounterApp();
};

var reset = function reset() {
  count = 0;
  console.log('reset');
  renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
  var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: increment, className: 'button' },
      '+ 1'
    ),
    React.createElement(
      'button',
      { onClick: decrement, className: 'button' },
      '- 1'
    ),
    React.createElement(
      'button',
      { onClick: reset, className: 'button' },
      'reset'
    )
  );
  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
