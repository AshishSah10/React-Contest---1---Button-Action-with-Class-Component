import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paraId: null
    };
  }
  handleClick = () => {
    this.setState({ paraId: 1 });
    document.getElementById(1).innerText =
      "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy";
  };
  render() {
    return (
      <div id="main">
        {/* Do not remove this main div!! */}
        <button id="click" onClick={this.handleClick}>
          Click Me!
        </button>
        <p id={this.state.paraId}></p>
      </div>
    );
  }
}

export default App;
