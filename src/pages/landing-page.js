import React from "react";
import NormalHeader from "../components/normal-header";
import leftImage from "../images/left.avif"; // Replace with your left-side image
import rightImage from "../images/right.avif"; // Replace with your right-side image

const LandingPage = () => {
  return (
    <div>
      {/* Header Section */}
      <NormalHeader />

      {/* Main Content */}
      <div className="main-content flex">
        {/* Left Side */}
        <div className="content-left">
          <img src={rightImage} alt="Left Side" className="content-image" />

          {/* Content Below Left Image */}
          <div className="content-text">
            <h2>India's Most-loved Payments App</h2>
            <p>
              Recharge & pay bills, book flights & movie tickets, open a savings
              account, invest in stocks & mutual funds, and do a lot more.
            </p>
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
