import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = { displayBio: false };

    // this.readMore = this.readMore.bind(this);
    this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
  }

  // readMore() {
  //   // bad practice
  //   // this.state.displayBio = true;

  //   // Use this instead
  //   this.setState({ displayBio: true });
  // }

  // showLess() {
  //   this.setState({ displayBio: false });
  // }

  toggleDisplayBio() {
    this.setState({ displayBio: !this.state.displayBio });
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <p>My name is Prahalad and I'm a Software developer.</p>
        <p>I'm easily excited!</p>
        {/* {bio} */}
        {this.state.displayBio ? (
          <div>
            <p>I live in Bengaluru, India and I write code almost everyday.</p>
            <p>
              I speak Kannada, Hindi and English; and parts of broken Spanish
              and French.
            </p>
            <p> I Love frozen yogurt. </p>
            <button onClick={this.toggleDisplayBio}> Show Less </button>
          </div>
        ) : (
          <div>
            {/* <button onClick={this.readMore}> Read more</button> */}
            <button onClick={this.toggleDisplayBio}> Read more</button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
