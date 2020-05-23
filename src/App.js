import React, { Component } from "react";

// Understand Differences between Regular class and extended class
class RegularClass {}
class ComponentClass extends Component {}

const RegularClassInstance = new RegularClass();
const ComponentClassInstance = new ComponentClass();

console.log("RegularClassInstance", RegularClassInstance);
console.log("ComponentClassInstance", ComponentClassInstance);

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <p>My name is Prahalad and I'm a Software developer.</p>
        <p>I'm easily excited!</p>
      </div>
    );
  }
}

export default App;
