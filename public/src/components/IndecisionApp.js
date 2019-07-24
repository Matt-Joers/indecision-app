import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';

export default class IndecisionApp extends React.Component {
  state = {
    options: []
  }
  // passes to multiple layers > options and then option to remove an individual record
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({ 
      options: prevState.options.filter((option) =>  optionToRemove !== option)
    }));
  }

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  handleAddOption = (option) => {
    if (!option) {
      return 'Enter a valid value to add an item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'Please enter a unique value';
    } 

    this.setState((prevState) => 
    ({options: prevState.options.concat([option])
    }));
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // do nothing at all
  }
} 
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  handleDeleteOptions = () => {
      this.setState(() => ({ options: [] }));
  }

  
  // if (option) {
  //   this.props.handleAddOption(option);
  // }

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