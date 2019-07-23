class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: props.options
    };
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
  }
} 
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
      console.log('saving data');
    }
    
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  handleDeleteOptions() {
      this.setState(() => ({ options: [] }));
  }

  // passes to multiple layers > options and then option to remove an individual record
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({ 
      options: prevState.options.filter((option) =>  optionToRemove !== option )
    }));
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter a valid value to add an item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'Please enter a unique value';
    } 

    this.setState((prevState) => ({options: prevState.options.concat([option])}));
  }
  
  if (option) {
    this.props.handleAddOption(option);
  }


  render() {
    const title = 'Indecision';
    const subtitle = 'Let the machine decide';

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
  
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: 'some default'
}

const Action = (props) => {
    return (
      <button 
        onClick={props.handlePick}
        disabled={!props.hasOptions}
        >
      What should I do?
      </button>
    );
  }

  const Options = (props) => {
    return (
      <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>please add an option to get started</p>}
      {
        props.options.map((option) => 
        <Option 
          key={option} 
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
        )}
       </div>
    );
  }

  const Option = (props) => {
    return (
      <div>
        {props.optionText}
        <button
          onClick={(e) => {
            props.handleDeleteOption(props.optionText)
          }}
        >
        Remove</button>
      </div>
    );
  }

class AddOption extends React.Component{
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    
    this.setState(() => ({ error }));
    if (!errror) {
      e.target.elements.option.value = '';
    }
  }

  render() {
    return (
      <div>
      {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Options</button>
        </form>
      </div>
    );
  }
}

// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name} </p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// };

ReactDOM.render(<IndecisionApp options={['Option 1', 'Option 2']} />, document.getElementById('app'));