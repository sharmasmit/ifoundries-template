import React from "react";
import LogoImage from "./LogoImage";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function ForgotPassword() {
  return (
    <>
      <div className="forgot-page">
        <LogoImage className='logo-img' />
        <div className="forgot-box">
          <form>
            <h1>Forgot Password?</h1>
            <h2>
              Enter your email (that you use to create your
              <br /> account) to receive a Verification Code.
            </h2>
            <input type="text" placeholder="youremail@gmail.com" />
            {/*<FontAwesomeIcon icon={faEnvelope} />*/} <br />
            <button type="submit">Continue</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default ForgotPassword;
