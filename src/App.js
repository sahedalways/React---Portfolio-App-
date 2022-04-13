import React, { Component } from "react";
import SignUp from "./Components/ControlledForm/SignUp";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    users: [],
  };

  getUsers = (user) => {
    this.setState({
      users: [...this.state.users, user],
    });
  };
  render() {
    return (
      <div>
        <SignUp getUser={this.getUsers} />

        <div>
          <h3 className={`my-5 text-center`}>All registered users are here!</h3>
          <ul className="list-group">
            {this.state.users.map((user) => (
              <li key={uuidv4()} className={`list-group-item text-center`}>
                Name : {user.name} ------- Email : {user.email}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
