import React, { Component } from 'react';

class Home extends Component {
  constructor(props){
    console.log(props);
    super(props)
  }
  render() {
    return (
      <div>
        <h3>HI {this.props.heading}</h3>
      </div>
    );
  }
}

export default Home;