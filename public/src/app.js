console.log('app.js is running');

let template = (
  <div>
    <h1>Matt Joers is writing a React App</h1>
    <p>This is some info</p>
    <ol>
      <li>one</li>
      <li>two</li>
    </ol>
  </div>
  );
let appRoot = document.getElementById('app');


ReactDOM.render(template, appRoot);