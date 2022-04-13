import React, { Component } from "react";
import Form from "./SplitForm/Form";

const initValues = {
  name: "",
  email: "",
  password: "",
  birthDate: "",
  gender: "",
};

export default class SignUp extends Component {
  state = {
    values: initValues,

    agreement: false,
    errors: {},
  };

  handleChange = (event) => {
    this.setState({
      values: {
        ...this.state.values,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleAgreement = (event) => {
    this.setState({
      agreement: event.target.checked,
    });
  };

  onHandleSubmit = (event) => {
    event.preventDefault();
    const { isValid, errors } = this.Validate();

    if (isValid) {
      this.props.getUser(this.state.values);

      event.target.reset();
      this.setState({ values: initValues, agreement: false });
    } else if (errors) {
      this.setState({ errors });
    }
  };

  Validate = () => {
    const {
      values: { name, email, password, gender },
    } = this.state;
    const errors = {};

    if (!name) {
      errors.name = "Please provide your valid name!";
    }
    if (!email) {
      errors.email = "Please provide your valid email!";
    }

    if (!password) {
      errors.password = "Please enter your password!";
    }

    if (!gender) {
      errors.gender = "Please select your gender!";
    }

    return { errors, isValid: Object.keys(errors).length === 0 };
  };

  render() {
    return (
      <div>
        <h2 style={{ textAlign: "center" }}>Sign Up Form</h2>
        <Form
          values={this.state.values}
          handleChange={this.handleChange}
          errors={this.state.errors}
          handleAgreement={this.handleAgreement}
          onHandleSubmit={this.onHandleSubmit}
          agreement={this.state.agreement}
        />
      </div>
    );
  }
}
