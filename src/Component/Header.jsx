import React, { Component } from "react";
import LeftComp from "./LeftComp";
import RightComp from "./RightComp";

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    
  }
  render() {
    return (
      <>
        <header className="container">
          <LeftComp />
          <RightComp />
        </header>
      </>
    );
  }
}

export default Header;
