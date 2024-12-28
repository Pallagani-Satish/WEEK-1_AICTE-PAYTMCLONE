import React from "react";

const DownloadPage = () => {
  return (
    <div className="download-container">
      <h1 className="download-heading">Download Paytm</h1>
      <p className="download-paragraph">
        Download Paytm for Android or iOS and experience seamless payments, recharges, and more!
      </p>

      {/* Android Download Link */}
      <div className="download-link-container">
        <h2>For Android</h2>
        <a
          href="https://play.google.com/store/apps/details?id=net.one97.paytm&hl=en_IN"
          target="_blank"
          rel="noopener noreferrer"
          className="download-link"
        >
          Download for Android
        </a>
      </div>

      {/* iOS Download Link */}
      <div className="download-link-container">
        <h2>For iOS</h2>
        <a
          href="https://apps.apple.com/in/app/paytm/id704348305"
          target="_blank"
          rel="noopener noreferrer"
          className="download-link"
        >
          Download for iOS
        </a>
      </div>
    </div>
  );
};

export default DownloadPage;
