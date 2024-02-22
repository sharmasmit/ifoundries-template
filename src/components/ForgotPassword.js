import React from "react";
import LogoImage from "./LogoImage";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function ForgotPassword() {
  function showEmail(e) {
    e.preventDefault();

    const email = document.querySelector("input").value;
    if(email === ''){
      alert("Email can't Be Blank");
    }
  }

  return (
    <>
      <div className="forgot-page">
        <LogoImage className="logo-img" />
        <div className="forgot-box">
          <form onSubmit={showEmail}>
            <h1>Forgot Password?</h1>
            <h3>
              Enter your email (that you use to create your
              <br /> account) to receive a Verification Code.
            </h3>
            <input type="email" placeholder="youremail@gmail.com" />
            <br />
            <button type="submit">Continue</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default ForgotPassword;
