
let visibility = false;

const toggleVisibility =() => {
  visibility = !visibility;
  renderTemplate();
}

const appRoot = document.getElementById('app');

const renderTemplate = () => {
  const template = (
    <div>
      <h1>Visibility</h1>
      <button onClick={toggleVisibility}>
      {visibility ? 'hide details': 'show details'}
      </button>
      {visibility && (
        <div>
          <p>These are some details</p>
        </div>
      )}
    </div>
    );
    {/*what to render and then where to render it */}
  ReactDOM.render(template, appRoot);
};

renderTemplate();