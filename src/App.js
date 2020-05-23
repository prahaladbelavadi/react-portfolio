import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = { displayBio: true };
  }

  render() {
    // const bio = this.state.displayBio ? (
    //   <div>
    //     <p>I live in Bengaluru, India and I write code almost everyday.</p>
    //     <p>
    //       I speak Kannada, Hindi and English; and parts of broken Spanish and
    //       French.
    //     </p>
    //     <p> I Love frozen yogurt. </p>
    //   </div>
    // ) : null;

    // if (!this.state.displayBio) {
    //   bio = null;
    // }

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
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
