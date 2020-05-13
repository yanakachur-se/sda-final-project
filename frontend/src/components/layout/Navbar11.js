import React from "react";
import logo from "../../assets/logo1.png";

function CustomNavbar1() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <a className="navbar-brand" href="#">
        <img src={logo} alt="logo" style={{ width: "40px" }} />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span i className="fas fa-bars" style={{ color: "#fff" }}></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto">
          <li className="nav-item active"></li>
        </ul>
      </div>
    </nav>
  );
}

export default CustomNavbar1;
