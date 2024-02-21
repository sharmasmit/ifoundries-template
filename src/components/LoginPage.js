import React from "react";
import LogoImage from "./LogoImage";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <>
      <div className="loginPage">
        <LogoImage className="logo-img" />
        <div className="login-box">
          <form>
            <h1>
              <span>Login</span> / Sign Up
            </h1>
            <h2>Welcome back, please log in.</h2>
            <input type="email" placeholder="Youremail@gmail.com" />
            <br />
            <input type="password" placeholder="Enter your password" style={{marginBottom: '1.25rem'}} />
            <br />
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
