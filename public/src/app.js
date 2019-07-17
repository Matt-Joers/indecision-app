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

let count = 0;

const increment = () => {
  count = count + 1;
  console.log(count + 1);
  renderCounterApp();
};

const decrement = () => {
  count = count - 1;
  console.log(count - 1);
  renderCounterApp();
};

const reset = () => {
  count = 0;
  console.log('reset')
  renderCounterApp();
};


const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment} className="button">+ 1</button>
      <button onClick={decrement} className="button">- 1</button>
      <button onClick={reset} className="button">reset</button>
    </div>
  );
  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
