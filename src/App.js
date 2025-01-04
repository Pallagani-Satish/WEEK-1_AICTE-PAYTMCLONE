import React, { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page";
import MobileRechargePage from "./pages/mobilerechargepage";
import SignInPage from "./pages/siginpage";
import TransferPage from "./pages/Transferpage";
import DownloadPage from "./pages/download";
import CheckBalancePage from "./pages/CheckBalancePage";
import NormalHeader from "./components/normal-header/normal-header-component";
import TransactionHistory from "./pages/TransactionHistory";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      {/* Conditionally render NormalHeader based on isLoggedIn */}
      {isLoggedIn && <NormalHeader isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignInPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/mobile-recharge" element={<MobileRechargePage />} />
        <Route path="/transfer" element={<TransferPage />} />
        <Route path="/download" element={<DownloadPage />} />
        <Route path="/check-balance" element={<CheckBalancePage />} />
        <Route path="/transactions" element={<TransactionHistory />} />
      </Routes>
    </Router>
  );
};

export default App;
