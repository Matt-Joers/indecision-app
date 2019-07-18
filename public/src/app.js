
console.log('app.js is running');

const appInfo = {
  title: 'Visibility Toggle',
  subtitle: 'Information that should be visible',
  visible: true, 
}

const show = () => {
  appInfo.visible = true;
  renderTemplate();
}

const hide = () => {
  appInfo.visible = false;
  renderTemplate();
}
function listOption(option) {
  if (appInfo.visible) {
    return (<p><p>{appInfo.subtitle}</p>
    <button onClick={hide} className="button">Hide details</button>
    </p>);
  } else {
    return (<p>
    <p></p>
    <button  onClick={show} className="button">Show details</button>
    </p>);
  }
}

const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];

const renderTemplate = () => {
  const template = (
    <div>
      <h1>{appInfo.title}</h1>
      <div>{listOption()}</div>
    </div>
    );
    {/*what to render and then where to render it */}
  ReactDOM.render(template, appRoot);
};

renderTemplate();