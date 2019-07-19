class Visibility extends React.Component {
  constructor(props) {
    super(props);
    this.visible = this.visible.bind(this);
    this.state = {
      visibility: false
    };
    console.log(this.state.visibility);
  }
  
  visible() {
    this.setState((state) => {
      return {
        visibility: !this.state.visibility
      };
      console.log(this.prevState.visibility);
    });
  }

  render() {
    return (
      <div>
      <h1>Visibility</h1>
        <button onClick={this.visible}>
          {!this.state.visibility ? 'show details' : 'hide details'}
        </button>
      
        {this.state.visibility && (
          <p>{!this.state.visibility ? '' : 'information that should be seen'}</p>
          )}
        </div>
    );
  }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));

// let visibility = false;

// const toggleVisibility =() => {
//   visibility = !visibility;
//   renderTemplate();
// }

// const appRoot = document.getElementById('app');

// const renderTemplate = () => {
//   const template = (
//     <div>
//       <h1>Visibility</h1>
//       <button onClick={toggleVisibility}>
//       {visibility ? 'hide details': 'show details'}
//       </button>
//       {visibility && (
//         <div>
//           <p>These are some details</p>
//         </div>
//       )}
//     </div>
//     );
//     {/*what to render and then where to render it */}
//   ReactDOM.render(template, appRoot);
// };

// renderTemplate();