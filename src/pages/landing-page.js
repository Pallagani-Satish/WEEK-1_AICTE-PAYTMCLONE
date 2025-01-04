import React from 'react';
import NormalHeader from '../components/normal-header/normal-header-component';
import leftImage from "../images/left.avif"; // Left-side image
import rightImage from "../images/right.avif"; // Right-side image
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleDownloadClick = () => {
    navigate("/download"); // Navigate to the download page
  };

  return (
    <div>
      {/* Header Section */}
      <NormalHeader />

      {/* Main Content */}
      <div className="main-content flex">
        {/* Left Side */}
        <div className="content-left">
          <img src={rightImage} alt="Left Side" className="content-image" />
          <div className="content-text">
            <h2>India's Most-loved Payments App</h2>
            <p>
              Recharge & pay bills, book flights & movie tickets, open a savings
              account, invest in stocks & mutual funds, and do a lot more.
            </p>
          </div>
          {/* Buttons Section */}
          <div className="button-section">
            <button onClick={handleDownloadClick} className="download-btn">
              Download Paytm
            </button>
            <button onClick={() => navigate("/signin")} className="sign-in-btn">
              Sign In
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="content-right">
          <img src={leftImage} alt="Right Side" className="content-image" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

       
