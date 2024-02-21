import React from "react";
import LogoImage from "./LogoImage";

export default function LoginSignupPage() {
  return (
    <>
      <div className="loginSignup">
        <LogoImage className="logo-img" />
        <div className="loginSignup-box">
          <form>
            <h1>
              <span>Login</span> / Sign Up
            </h1>
            <h2>Welcome back, please log in.</h2>
            <input type="text" placeholder="Youremail@gmail.com" />
            <br />
            <input type="text" placeholder="Enter your password" />
            <br />
            <button type="submit">Log In</button>
          </form>
        </div>
      </div>
    </>
  );
}
