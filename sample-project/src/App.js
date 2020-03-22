import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <label htmlFor="bar" className="barClass">bar</label>
        <input type="text" onClick={() => {console.log("clicked!");}} placeholder="click"/>
        <input type="text" onChange={() => {console.log("changed!");}} placeholder="change"/>
      </React.Fragment>
    );
  }
}


export default App;
