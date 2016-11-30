import React, { Component } from 'react';
import Login from '../Login/Login.jsx';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      something: 'something else'
    }
  }

  render() {
    return(
      <div>
        <Login
          
        />
      </div>
    )
  }
}
