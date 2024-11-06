import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Tai",
    adress: "Ha Noi",
    age: "23",
  };

  //JSX
  render() {
    return <div> my name is{this.state.name}</div>;
  }
}

export default MyComponent;
