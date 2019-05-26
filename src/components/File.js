import React, { Component } from 'react';
import Home from './Home';
class File extends Component {
  constructor(props){
    console.log(props);
    super(props)
  }
  render() {
    return (
      <div>
        <h3>HI {this.props.name}</h3>
        {/* <Home heading={this.props.name}></Home> */}
      </div>
    );
  }
}

export default File;