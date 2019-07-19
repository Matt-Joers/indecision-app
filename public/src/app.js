class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Let the machine decide';
    const options = ['Test 01', 'Test 02', 'Test 03', 'Test 04'];

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options}/>
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
    return(
      <button>What should I do?</button>
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
  render() {
    return (
      <div>
        Add Option Component Here
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));