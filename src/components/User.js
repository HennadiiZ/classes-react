import classes from './User.module.css';
import { Component } from 'react';

class User extends Component {
  render(){
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;

// 165 Adding a First Class-based Component

// 166 Working with State & Events

// 167 The Component Lifecycle (Class-based Components Only!)