console.log('app.js is running');

const appInfo = {
  title: 'Indecision App',
  subtitle: `Create a list of To-dos and then click "what should I do?"`,
  options: [], 
}

function listOption(option) {
  if (appInfo.options && appInfo.options.length > 0) {
    return <p>Here are your options: {appInfo.options}</p>
  } else {
    return <p>No options are available</p>
  }
}
const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if (option) {
    appInfo.options.push(option);
    e.target.elements.option.value = '';
    renderTemplate();
  }
};

const removeAll = () => {
  appInfo.options = [];
  renderTemplate();
}

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * appInfo.options.length);
  const option = appInfo.options[randomNum];
  alert(option);
};

const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];

const renderTemplate = () => {
  const template = (
    <div>
      <h1>{appInfo.title}</h1>
      {appInfo.subtitle && <p>{appInfo.subtitle}</p>}
      <button disabled={appInfo.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={removeAll} className="button">Remove All</button>
      {/*
        numbers.map((number)=> {
          return <p key={number}>Number: {number}</p>;
        })
      */}
      <ol>
        {
          appInfo.options.map((option) => {
            return <li key={option}>{option}</li>;
          })
        }
      </ol>
      {listOption(appInfo.options)}
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
        
      </form>
    </div>
    );
  ReactDOM.render(template, appRoot);
};

renderTemplate();