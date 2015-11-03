import React, {Component, PropTypes} from 'react';
import App from './components/App';

React.render(
  <App />,
  document.getElementById('root')
);

// function decorate (Comp) {
//   return class OtherParent extends Component {
  
//     static childContextTypes = {
//       getUser: PropTypes.func
//     }
    
//     getChildContext() {
//       return {
//         getUser: () => ({ name: 'Bob' })
//       };
//     }
    
//     render() {
//       return <Comp />;
//     }
//   }
// }

// function undecorate (Comp) {
//   return class OtherChild extends Component {
  
//     static contextTypes = {
//       getUser: PropTypes.func
//     }
    
//     render() {
//       return <Comp {...this.context} />;
//     }
//   }
// }



// class GrandChild  extends Component  {

//   render() {
//     const user = this.props.getUser();
//     return <p>Hello {user.name}!</p>;
//   }
// }

// class Parent extends Component {
//   render() {
//     return <Child />;
//   }
// }


// var GrandChildOther = undecorate(GrandChild);


// class Child extends Component {
//   render() {
//     return <GrandChildOther />;
//   }
// }

// var Something = decorate(Parent)

// class App extends Component {
//   render() {
//     return <Something />;
//   }
// }

// React.render(
//   <App />,
//   document.getElementById('root')
// );
