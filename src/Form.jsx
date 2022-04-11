import React, { Component } from "react";

class index extends Component {
  state = {
    name: "",
    country: "",
    bio: "",
    birthday: "",
  };

  handleChange = (event) => {
    if (event.target.type === "text") {
      this.setState({ name: event.target.value });
    } else if (event.target.type === "select-one") {
      this.setState({ country: event.target.value });
    } else if (event.target.type === "textarea") {
      this.setState({ bio: event.target.value });
    } else if (event.target.type === "date") {
      this.setState({ birthday: event.target.value });
    } else {
      alert("Please fill the required field please!!");
    }
  };

  handleSubmit = (event) => {
    const { name, country, bio, birthday } = this.state;

    event.preventDefault();
    console.log({ name, country, bio, birthday });
  };

  render() {
    const { name, country, bio, birthday } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="inputName">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              onChange={this.handleChange}
              value={name}
            />
            <h2>{name}</h2>
          </div>

          <div className="countrySelect">
            <select
              onChange={this.handleChange}
              value={country}
              name="Country"
              id=""
            >
              <option value="Bangladesh">Bangladesh</option>
              <option value="India">India</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Sri-Lanka">Sri-Lanka</option>
              <option value="China">China</option>
            </select>
          </div>

          <div className="bio">
            <textarea
              value={bio}
              onChange={this.handleChange}
              name="bio"
              id=""
            ></textarea>
          </div>

          <div className="birthDay">
            <input
              type="date"
              onChange={this.handleChange}
              value={birthday}
              name="birthday"
            />
          </div>
          <h4>{birthday}</h4>

          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default index;
