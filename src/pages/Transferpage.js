import React, { useState } from "react";
import NormalHeader from "../components/normal-header";
import transferImage from "../images/TRANSFER PAGE.avif";

const TransferPage = () => {
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");

  const handleTransfer = async () => {
    if (!recipient || !amount) {
      alert("Please fill all the fields.");
      return;
    }

    // Validate the recipient phone number (simple example)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(recipient)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    // Validate the amount
    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    try {
      // Make a POST request to the API
      const response = await fetch("http://localhost:5000/api/transfer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ recipient, amount }), // Send recipient and amount
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message); // Show success message
        setAmount(""); // Clear the amount field
        setRecipient(""); // Clear the recipient field
      } else {
        alert(data.message || "An error occurred");
      }
    } catch (error) {
      console.error("Error transferring money:", error);
      alert("An error occurred while transferring funds.");
    }
  };

  return (
    <div>
      <NormalHeader />
      <div className="transfer-container">
        <div className="transfer-left">
          <h1>Most Reliable UPI Payment App in the Country.</h1>
          <p>
            With our app, Anyone can <strong>Transfer Funds</strong> or <strong>Pay</strong>
            without any worries. Convenient with built-in safety features, easy access
            to account balance, and payment history.
          </p>
          <div className="transfer-form">
            <label>Recipient Mobile Number:</label>
            <input
              type="text"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              placeholder="Recipient phone number"
            />
            <label>Enter Amount:</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Amount to transfer"
            />
            <button onClick={handleTransfer} className="transfer-btn">
              Transfer
            </button>
          </div>
        </div>

        <div className="transfer-right">
          <div className="illustration">
            <img
              src={transferImage}
              alt="UPI Payment Illustration"
              className="mobile-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferPage;
