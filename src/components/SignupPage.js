import React from 'react'
import LogoImage from './LogoImage'

export default function SignupPage() {
  return (
    <>
    <div className="signupPage">
        <LogoImage className="logo-img" />
        <div className="signup-box">
          <form>
            <h1>
              Login / <span>Sign Up</span>
            </h1>
            <h2>Welcome back, please log in.</h2>
            <input type="text" placeholder="Your name" />
            <br />
            <input type="email" placeholder="Youremail@gmail.com" />
            <br />
            <input type="password" placeholder="Enter your password" />
            <br />
            <input type="password" placeholder="Re-enter your password" style={{marginBottom: '1.25rem'}} />
            <br />
            <br />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </>
  )
}
