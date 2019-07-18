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
const appRoot = document.getElementById('app');
renderCounterApp();
