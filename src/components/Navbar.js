import React, { Component } from "react";
export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg np-element fixed-top">
          <a className="navbar-brand  ml-5" href={{}}>
            <span className=" np-element  np-square-xxl np-shadow brand">
              {" "}
              Review Store{" "}
              <img
                className="logo"
                src={require("../assets/logo.png")}
                alt=".."
              />
            </span>
          </a>
        </nav>
      </div>
    );
  }
}

export default Navbar;
