class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
      const stringCount = localStorage.getItem('count');
      const count = parseInt(stringCount, 10);

      if (!isNaN(count)) {
        this.setState(() => ({ count }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count);
    }
  };

  increment() {
    this.setState((prevState) => {
      return {
      count: prevState.count + 1
    };
  });
  }

  decrement() {
    this.setState((prevState) => {
      return {
      count: prevState.count - 1
    };
  });
  }

  reset() {
    this.setState(() => {
      return {
      count: 0
    };
  });
  }

  

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>  +1 </button>
        <button onClick={this.decrement}> -1 </button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

Counter.defaultProps = {
  count: 0,
};

ReactDOM.render(<Counter count={0}/>, document.getElementById('app'));

// let count = 0;

// const increment = () => {
//   count = count + 1;
//   console.log(count + 1);
//   renderCounterApp();
// };

// const decrement = () => {
//   count = count - 1;
//   console.log(count - 1);
//   renderCounterApp();
// };

// const reset = () => {
//   count = 0;
//   console.log('reset')
//   renderCounterApp();
// };

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={increment} className="button">+ 1</button>
//       <button onClick={decrement} className="button">- 1</button>
//       <button onClick={reset} className="button">reset</button>
//     </div>
//   );
//   ReactDOM.render(templateTwo, appRoot);
// };
// const appRoot = document.getElementById('app');
// renderCounterApp();
