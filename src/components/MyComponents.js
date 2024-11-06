import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Tai",
    address: "Ha Noi",
    age: "23",
  };

  handleClick = (event) => {
    console.log(">> Click my button");
    console.log("My name is ", this.state.name);

    this.setState({
      name: "Luyen",
    });
  };

  handleOnMoverOver(event) {
    console.log(event.pageX);
  }

  //JSX
  render() {
    return (
      <div>
        my name is{this.state.name}
        <button onMouseOver={this.handleOnMoverOver}>Hover me</button>
        <button
          onClick={(event) => {
            this.handleClick(event);
          }}
        >
          Click me
        </button>
      </div>
    );
  }
}

export default MyComponent;
