import React, { Component } from "react";


class Form2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      h1: "",
    };
  }

  emailhandler = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  passwordhandler = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      h1: `hello ${this.state.email}`,
    });
    this.setState({
      email: "",
      password: "",
    });
  };
  render() {
    return (
      <>
        <div className="outer_container">
          <div className="form_container">
            <h2>Log in</h2>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="email"
                placeholder="Enter email"
                name="email"
                autoComplete="off"
                required
                value={this.state.email}
                onChange={this.emailhandler}
              />
              <br />
              <br />
              <br />
              <label htmlFor="password">Password</label>
              <br />
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                required
                value={this.state.password}
                onChange={this.passwordhandler}
              />
              <br />
              <br />
              <button className="right_btn" type="submit">
                Submit
              </button>
            </form>
            <br />
            <br />
          </div>
          <h1 className="userEmail">{this.state.h1}</h1>
        </div>
      </>
    );
  }
}
export default Form2;
