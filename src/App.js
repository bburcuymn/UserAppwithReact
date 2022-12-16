import React, { Component } from "react";
import AddUser from "./components/AddUser";
import Users from "./components/Users";

class App extends Component {





  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          id: 1,
          name: "Burcu Yaman",
          email: "burcu@gmail.com"
        },
        {
          id: 2,
          name: "Baran Altun",
          email: "baran@gmail.com"
        },
        {
          id: 3,
          name: "Berin Ok",
          email: "berin@gmail.com"
        }
      ]
    };
    this.deleteUser = this.deleteUser.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  addUser(newUser) {
    let updatedUser = this.state.users;
    updatedUser.push(newUser);
    this.setState({
      users: updatedUser
    })


  }

  deleteUser(id) {
    let updatedUser = this.state.users;
    updatedUser = updatedUser.filter(user => user.id !== id);
    this.setState({
      users: updatedUser
    })
  }


  render() {
    return (
      <div className="container">
        <h5>USER APP </h5>
        <hr></hr>
        <AddUser addUser={this.addUser}></AddUser>
        <hr />
        <Users deleteUser={this.deleteUser} users={this.state.users}></Users>
      </div>
    );
  }
}

export default App;
