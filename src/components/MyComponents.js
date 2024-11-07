import React from "react";
import AddUserInfor from "./AddUserinfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Nguyen Tan Tai", age: "17" },
      { id: 2, name: " Tan Tai", age: "25" },
      { id: 3, name: "Nguyen Tien Dung", age: "50" },
    ],
  };

  handleAddNewUser = (userObj) => {
    // Cách 1
    // let listUsersNew = this.state.listUsers;
    // listUsersNew.unshift(userObj);
    // this.setState({
    //   listUsers: listUsersNew,
    // });

    this.setState({
      listUsers: [userObj, ...this.state.listUsers], // dùng để cập nhật ở đầu mảng, dấu 3 chấm copy lại trạng thái của bảng listUsers
      //   listUsers: [ ...this.state.listUsers,userObj], // dùng để cập nhật ở cuối mảng
    });
  };
  //JSX
  render() {
    return (
      <div>
        <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
        <br />
        <br />
        <DisplayInfor listUsers={this.state.listUsers} />
      </div>
    );
  }
}

export default MyComponent;
