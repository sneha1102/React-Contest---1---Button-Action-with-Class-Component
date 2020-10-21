import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      render: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ render: !this.state.render });
  }
  render() {
    return (
      <div id="main">
        {this.state.render && (
          <p id="para">
            Hello, I've learnt to use the full-stack evaluation tool. This makes
            me so happy
          </p>
        )}
        <button id="click" onClick={this.handleClick}>
          Click
        </button>
      </div>
    );
  }
}

export default App;
