import React from "react";
import LogoImage from "./LogoImage";

function SignupPage() {
  function signupValidation(e) {
    e.preventDefault();

    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("emailId").value;
    let pass1 = document.getElementById("password").value;
    let pass2 = document.getElementById("reEnterPass").value;

    console.log(fullName, email, pass1, pass2);

    if (
      fullName === " " ||
      fullName.includes("0") ||
      fullName.includes("1") ||
      fullName.includes("2") ||
      fullName.includes("3") ||
      fullName.includes("4") ||
      fullName.includes("5") ||
      fullName.includes("6") ||
      fullName.includes("7") ||
      fullName.includes("8") ||
      fullName.includes("9")
    ) {
      alert("Enter Data Properly");
      return false;
    }

    if (email === "" || !email.includes("@")) {
      alert("Please enter valid Email Address");
      //   email.focus();
      return false;
    }

    if (pass1 === "") {
      alert("Please enter Password");
      //   pass1.focus();
      return false;
    }
    if (pass2 === "") {
      alert("Please Re enter Password");
      return false;
    }

    if (pass1 !== pass2) {
      alert("Passwords must match");
      return false;
    }
    alert("Ragistration Completed");
  }
  return (
    <>
      <div className="signupPage">
        <LogoImage className="logo-img" />
        <div className="signup-box">
          <form onSubmit={signupValidation}>
            <h1>
              Login / <span>Sign Up</span>
            </h1>
            <h3>Welcome back, please log in.</h3>
            <input type="text" placeholder="Your name" id="fullName" />
            <br />
            <input
              type="email"
              placeholder="Youremail@gmail.com"
              id="emailId"
            />
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              minLength={6}
              id="password"
            />
            <br />
            <input
              type="password"
              placeholder="Re-enter your password"
              style={{ marginBottom: "1.25rem" }}
              id="reEnterPass"
            />
            <br />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default SignupPage;
