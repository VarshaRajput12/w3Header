import React, { Component } from "react";
import LeftComp from "./LeftComp";
import RightComp from "./RightComp";

class Header extends Component {
  // constructor(props) {
  //   super(props);
  //   console.log(props.handleLogin);
  // }

  render() {
    return (
      <>
        <header className="container">
          <LeftComp />
          <RightComp handleLogin={this.props.handleLogin} />
        </header>
      </>
    );
  }
}

export default Header;
