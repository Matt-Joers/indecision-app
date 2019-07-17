console.log('app.js is running');

let appInfo = {
  title: 'Hello there',
  subtitle: 'subtitle text'
}


let template = (
  <div>
    <h1>{appInfo.title}</h1>
    <p>{appInfo.subtitle}</p>
    <ol>
      <li>one</li>
      <li>two</li>
    </ol>
  </div>
  );

let user = {
  name: 'Matt',
  age: 32,
  location: 'Wisconsin'
}

let userName = 'Matthew';
let userAge = 32;
let userLocation = 'Ashippun';

let templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);

let appRoot = document.getElementById('app');


ReactDOM.render(template, appRoot);