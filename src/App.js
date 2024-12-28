import React from "react";
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page";
import MobileRechargePage from "./pages/mobilerechargepage";
import SignInPage from "./pages/siginpage";
import TransferPage from "./pages/Transferpage";
import DownloadPage from "./pages/download";
import CheckBalancePage from "./pages/CheckBalancePage";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/mobile-recharge" element={<MobileRechargePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/transfer" element={<TransferPage />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/check-balance" element={<CheckBalancePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
