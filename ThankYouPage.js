import { Component } from "react";
import "./index.css";

class ThankYouPage extends Component {
  render() {
    return (
      <div className="before-signup-bg-container">
        <img
          src="https://i.pinimg.com/originals/8e/e9/8f/8ee98fb431006d51afa7eb18999184aa.png"
          alt="building"
          className="building-image"
        />
        <h1 className="before-heading">
          Thank you!
          <br />
          We'll back to you soon.
        </h1>
        <p className="before-paragraph">Please check your email.</p>
      </div>
    );
  }
}

export default ThankYouPage;
