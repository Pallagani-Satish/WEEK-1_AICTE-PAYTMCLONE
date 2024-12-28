import React, { useState } from "react";
import NormalHeader from "../components/normal-header";


const MobileRechargePage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedOperator, setSelectedOperator] = useState("Jio");
  const [circle, setCircle] = useState("Andhra Pradesh");

  const handleRecharge = () => {
    alert(`Recharging ${phoneNumber} with ₹${amount} via ${selectedOperator}`);
    // Add functionality to process the recharge here
  };

  const rechargePlans = [
    { data: "1 GB", validity: "1 Day", description: "Existing Active Plan", price: 19 },
    { data: "Unlimited 5G + 2 GB/day", validity: "28 Days", description: "True 5G Unlimited Plan", price: 349 },
  ];

  return (
    <div>
      <NormalHeader />
      <div className="recharge-container">
        <div className="form-section">
          <h2>Mobile Recharge</h2>
          <label>Enter Phone Number:</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter phone number"
          />

          <label>Select Operator:</label>
          <select value={selectedOperator} onChange={(e) => setSelectedOperator(e.target.value)}>
            <option>Jio</option>
            <option>Airtel</option>
            <option>VI</option>
            <option>BSNL</option>
          </select>

          <label>Select Circle:</label>
          <select value={circle} onChange={(e) => setCircle(e.target.value)}>
            <option>Andhra Pradesh</option>
            <option>Telangana</option>
            <option>Tamil Nadu</option>
            <option>Karnataka</option>
          </select>

          <label>Enter Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount to Recharge"
          />

          <button onClick={handleRecharge} className="recharge-btn">
            Recharge
          </button>
        </div>

        <div className="plans-section">
          <h2>Browse Plans</h2>
          {rechargePlans.map((plan, index) => (
            <div className="plan-card" key={index}>
              <div className="plan-details">
                <h4>{plan.data}</h4>
                <p>{plan.validity}</p>
                <small>{plan.description}</small>
              </div>
              <div className="plan-price">
                <button>₹{plan.price}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileRechargePage;
