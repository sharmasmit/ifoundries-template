import React from "react";
import LogoImage from "./LogoImage";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

function LoginPage() {
  return (
    <>
      <div className="loginPage">
        <LogoImage className="logo-img" />
        <div className="login-box">
          <form>
            <h1>
              <span>Login</span> / Sign Up
            </h1>
            <h3>Welcome back, please log in.</h3>
            <div className="input-container">
              <input type="email" placeholder="Youremail@gmail.com" />
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
            </div>
            <div className="input-container">
              <input
                type="password"
                placeholder="Enter your password"
                style={{ marginBottom: "1.25rem" }}
              />
              <FontAwesomeIcon
                icon={faLock}
                className="icon"
                style={{ top: "46%" }}
              />
            </div>
            <Link to={"/ForgotPassword"} className="forgotLink">
              Forgot password?
            </Link>
            <br />
            <button type="submit">Log In</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default LoginPage;
