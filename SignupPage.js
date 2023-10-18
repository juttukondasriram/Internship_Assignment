import "./index.css";
import { BiSearch } from "react-icons/bi";
import { Component } from "react";
import { Link } from "react-router-dom";

class SignupPage extends Component {
  state = { name: "John Doe", email: "john@requantive.com", phone: "" };

  onNameElement = (event) => {
    this.setState({ name: event.target.value });
  };

  onEmailElement = (event) => {
    this.setState({ email: event.target.value });
  };

  onPhoneElement = (event) => {
    this.setState({ phone: event.target.value });
  };
  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="signup-bg-container">
        <BiSearch color="#ff3333" fontSize="2em" />
        <p className="paragraph">
          Please confirm or edit your contact information, so that we can
          <br />
          notify you when you are approved for our BETA
        </p>
        <p>
          ______________________________________________________________________
        </p>
        <label className="label-element">NAME</label>
        <input
          onChange={this.onNameElement}
          type="text"
          className="input-element"
          value={name}
        />
        <label className="label-element">EMAIL ADDRESS</label>
        <input
          onChange={this.onEmailElement}
          type="text"
          className="input-element"
          value={email}
        />
        <label className="label-element">PHONE NUMBER</label>
        <input
          placeholder="Type a phone number"
          onChange={this.onPhoneElement}
          type="text"
          className="input-element-phone"
          value={phone}
        />
        <p>
          ______________________________________________________________________
        </p>
        <Link to="/thankyou">
          <button type="button" className="before-button">
            SIGN UP
          </button>
        </Link>
      </div>
    );
  }
}

export default SignupPage;
