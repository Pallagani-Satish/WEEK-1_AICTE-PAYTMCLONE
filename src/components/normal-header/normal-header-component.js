import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo.svg";

const NormalHeader = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    setIsLoggedIn(false); // Log out the user
    navigate("/"); // Redirect to landing page
  };

  return (
    isLoggedIn && ( // Only show the navbar if the user is logged in
      <nav>
        <div className="logo">
          <img src={logo} alt="Paytm Logo" />
        </div>

        <div className="menu">
          <Link to="/mobile-recharge">Mobile Recharge</Link>
          <Link to="/transfer">Transfer</Link>
          <Link to="/check-balance">Check Balance</Link>
          <Link to="/transactions">Transaction History</Link>

          <button onClick={handleSignOut} className="signout-btn">
            Sign Out
          </button>
        </div>
      </nav>
    )
  );
};

export default NormalHeader;
