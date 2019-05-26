import React, { Component } from 'react';
import './App.css';
import { FormUserDetails } from './components/FormUserDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <UserForm /> */}
        <FormUserDetails ></FormUserDetails>
      </div>
    );
  }
}

export default App;