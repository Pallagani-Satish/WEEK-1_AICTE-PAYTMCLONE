import React from "react";
import logo from "../../images/logo.svg";

const NormalHeader = () => {
  return (
    <nav>
      {/* Logo Section */}
      <div className="logo">
        <img src={logo} alt="Paytm Logo" />
      </div>

      {/* Navigation Links */}
      <div className="menu">
        <a href="#consumer">Paytm for Consumer</a>
        <a href="#business">Paytm for Business</a>
        <a href="#relations">Investor Relations</a>
        <a href="#company">Company</a>
        <a href="#career">Career</a>
      </div>

      {/* Authentication Buttons */}
      <div className="auth-buttons">
        <a href="#signin">Sign In</a>
      </div>
    </nav>
  );
};

export default NormalHeader;
