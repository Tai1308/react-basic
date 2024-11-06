import React from "react";
import UserInfor from "./Userinfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  //JSX
  render() {
    const myInfor = ["a", "b", "c"];
    return (
      <div>
        <UserInfor />
        <br />
        <br />
        <DisplayInfor name="Nguyen Tan Tai" age="24" />
        <hr />
        <DisplayInfor name="Tan Tai" age={24} myInfor={myInfor} />
      </div>
    );
  }
}

export default MyComponent;
