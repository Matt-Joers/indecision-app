
// install -> import -> Use
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

class OldSyntax {
  constructor(props) {
    this.name = 'Matt';
  }
  getGreeting() {
    return `Hi, my name is ${this.name}`;
  }
}
const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(oldSyntax);
console.log(oldSyntax.getGreeting());
// ----- no need to use constructor now!

class NewSyntax {
  name = 'Matt';
  getGreeting = () => {
    return `hello, my name is ${this.name}`;
  }
}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newSyntax);
console.log(newGetGreeting())