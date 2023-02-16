import React, { Component } from "react";

class RightComp extends Component {
  // constructor(props) {
  //   super(props);
  //   console.log(props.handleLogin)
  // }
  render() {
    return (
      <>
        <div className="right_side">
          <i className="fa-solid fa-circle-half-stroke"></i>
          <i className="fa-solid fa-earth-americas"></i>
          <i className="fa-solid fa-magnifying-glass"></i>
          <button className="pro right_btn">Pro</button>
          <button className="certified right_btn">Get Certified</button>
          <button className="Website right_btn">Create Website</button>
          <button onClick={this.props.handleLogin} className="log_in right_btn">
            Log in
          </button>
        </div>
      </>
    );
  }
}

export default RightComp;
