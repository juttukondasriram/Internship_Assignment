import "./App.css";
import { Component } from "react";
import ThankYouPage from "../src/components/ThankYouPage";
import BeforeSignupPage from "../src/components/BeforeSignupPage";
import SignupPage from "../src/components/SignupPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<BeforeSignupPage />} />
          <Route exact path="/signup" element={<SignupPage />} />
          <Route exact path="/thankyou" element={<ThankYouPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
