import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Tai",
    address: "Ha Noi",
    age: "23",
  };

  handleClick = (event) => {
    console.log(">> Click my button");
    console.log("My name is  ", this.state.name);

    this.setState({
      name: "Luyen",
    });
  };

  handleOnMoverOver(event) {
    console.log(event.pageX);
  }

  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  //JSX
  render() {
    return (
      <div>
        my name is {this.state.name}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            onChange={(event) => this.handleOnChangeInput(event)}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default MyComponent;
