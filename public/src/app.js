console.log('app.js is running');

let appInfo = {
  title: 'Hello there',
  subtitle: 'subtitle text',
  options: ['one', 'two'] 
}

function listOption(option) {
  if (appInfo.options && appInfo.options.length > 0) {
    return <p>Here are your options: {appInfo.options}</p>
  } else {
    return <p>No options are available</p>
  }
}

let template = (
  <div>
    <h1>{appInfo.title}</h1>
    {appInfo.subtitle && <p>{appInfo.subtitle}</p>}
    <ol>
      <li>one</li>
      <li>two</li>
    </ol>
    {listOption(appInfo.options)}
    {/* 
    This could've been used as well for conditional rendering:
    <p>{app.options.length > 0 ? 'Here are your options' : 'no options'}</p>
  </div>
  );

let user = {
  name: 'Matt',
  age: 32,
  location: 'Wisconsin'
};

// Simple if statement
function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  } else {
    return undefined;
  } 
}

let templateTwo = (
  <div>
    {/* simple ternary statements --> */}
    <h1>{user.name ? user.name : 'anonymous'}</h1>
    {(user.age && user.age > 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

let appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);