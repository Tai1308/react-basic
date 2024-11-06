import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Tai",
    adress: "Ha Noi",
    age: "23",
  };

  handleClick(event) {
    console.log(">> Click my button");
  }

  //JSX
  render() {
    return (
      <div>
        my name is{this.state.name}
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default MyComponent;
