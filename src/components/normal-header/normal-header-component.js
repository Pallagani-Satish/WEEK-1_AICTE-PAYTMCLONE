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
        <Link to="/">Home</Link>
        <Link to="/mobile-recharge">Mobile Recharge</Link>
        <Link to="/transfer">Transfer</Link>
        <Link to="/check-balance">Check Balance</Link>
        <Link to="/signin">Sign In</Link>
      </div>
    </nav>
  );
};

export default NormalHeader;
