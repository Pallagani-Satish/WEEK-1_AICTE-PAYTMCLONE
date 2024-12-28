import React, { useState } from "react";
import NormalHeader from "../components/normal-header";
import balanceImage from "../images/CHECKBALENCE.webp"; 

const CheckBalancePage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [balance, setBalance] = useState(null);

  const handleCheckBalance = () => {
    if (!phoneNumber) {
      alert("Please enter your phone number.");
      return;
    }

    // Dummy logic for fetching balance
    const dummyBalances = {
      "9391357255": 150.5,
      "9876543210": 300.75,
    };

    const fetchedBalance = dummyBalances[phoneNumber] || "Not Found";
    setBalance(fetchedBalance);
  };

  return (
    <div>
      <NormalHeader />
      <div className="check-balance-container">
        {/* Left Section */}
        <div className="check-balance-left">
          <h1>Your Account Balance at a Glance</h1>
          <p>
            Enter your phone number to check your available balance. Secure, fast, and convenient balance access.
          </p>
          <div className="check-balance-form">
            <label>Enter Phone Number:</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter phone number"
            />
            <button onClick={handleCheckBalance} className="check-balance-btn">
              Check Balance
            </button>
          </div>

          {balance !== null && (
            <div className="balance-display">
              {balance === "Not Found" ? (
                <p>No balance found for this number.</p>
              ) : (
                <p>Available Balance: ₹{balance}</p>
              )}
            </div>
          )}
        </div>

        {/* Right Section */}
        <div className="check-balance-right">
          <div className="illustration">
            <img
              src={balanceImage}
              alt="Balance Illustration"
              className="balance-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckBalancePage;
