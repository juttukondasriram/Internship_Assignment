import { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

class BeforeSignupPage extends Component {
  render() {
    return (
      <div className="before-signup-bg-container">
        <img
          src="https://i.pinimg.com/originals/8e/e9/8f/8ee98fb431006d51afa7eb18999184aa.png"
          alt="building"
          className="building-image"
        />
        <h1 className="before-heading">
          Real Estate Investing Information
          <br />
          That Matters to You.
        </h1>
        <p className="before-paragraph">
          Limited to the San Francisco Bay Area -- Join our BETA!
        </p>
        <Link to="/signup">
          <button type="button" className="before-button">
            SIGN UP WITH LINKEDIN
          </button>
        </Link>
        <p className="before-paragraph-down">SIGN IN</p>
      </div>
    );
  }
}

export default BeforeSignupPage;
