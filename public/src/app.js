class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state = {
      options: ['Test01', 'Test02', 'Test03', 'Test04'],
    };
  }

  handlePick() {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
      alert(option);
    };
  
  
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
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
        />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  };
}

class Action extends React.Component {
 
  render() {
    return (
      <button 
        onClick={this.props.handlePick}
        disabled={!this.props.hasOptions}
        >
      What should I do?
      </button>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
      {this.props.options.length}
      {
        this.props.options.map((option) => <Option key={option} optionText={option} />)
      }
      <button onClick={this.props.handleDeleteOptions}>Remove All</button>
       </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    );
  }
}

class AddOption extends React.Component{
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
  
    if (option) {
      // this.props.options.push(option);
      alert(option);
      e.target.elements.option.value = '';
      renderTemplate();
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Options</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));