import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import signInImage from "../images/siginpage.avif";

const SignInPage = ({ setIsLoggedIn }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const navigate = useNavigate();

  const handleSendOtp = () => {
    fetch("http://localhost:5000/send-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phoneNumber }), // Pass the phone number correctly
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);
        setIsOtpSent(true);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleLogin = () => {
    fetch("http://localhost:5000/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phoneNumber, otp }),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((data) => {
            throw new Error(`HTTP error! status: ${response.status} - ${data.message}`);
          });
        }
        return response.json();
      })
      .then((data) => {
        if (data.token) {
          alert(data.message);
          localStorage.setItem("token", data.token); // Store the JWT token
          setIsLoggedIn(true);
          navigate("/mobile-recharge");
        } else {
          alert("Invalid OTP");
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert(`An error occurred during login: ${error.message}`);
      });
  };
  
  
  return (
    <div className="sign-in-container">
      <div className="sign-in-left">
        <h1>Welcome Back!</h1>
        <p>Sign in to access your account and enjoy all the features.</p>
        <div className="sign-in-form">
          <label>Enter Mobile Number:</label>
          <input
  type="text"
  value={phoneNumber}
  onChange={(e) => setPhoneNumber(e.target.value)}
  placeholder="Enter your mobile number"
/>

          {!isOtpSent ? (
            <button onClick={handleSendOtp} className="otp-btn">
              Send OTP
            </button>
          ) : (
            <>
              <label>Enter OTP:</label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
              />
              <button onClick={handleLogin} className="login-btn">
                Login
              </button>
            </>
          )}
        </div>
      </div>

      <div className="sign-in-right">
        <div className="illustration">
          <img
            src={signInImage}
            alt="Sign In Illustration"
            className="sign-in-image"
          />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
