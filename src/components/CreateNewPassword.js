import React from "react";

function CreateNewPassword() {
  function CreatePassword(e) {
    e.preventDefault();

    let pass1 = document.getElementById("password").value;
    let pass2 = document.getElementById("confPassword").value;

    if (pass1 === "") {
      alert("Password can't be blank");
      return;
    }
    if (pass2 === "") {
      alert("Confirm Password can't be blank");
      return;
    }

    if (pass1.length < 6 || pass2.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }

    if (pass1 !== pass2) {
      alert("Passwords must match");
      return;
    }

    alert("Password changed successfully");
  }

  return (
    <>
      <div className="create-pass">
        <div className="create-pass-box">
          <form onSubmit={CreatePassword}>
            <h1>Create New Password</h1>
            <h2>
              Your new password must be different from your previous <br /> used
              password. Minimum 6 characters
            </h2>
            <input
              type="password"
              placeholder="Enter your password"
              id="password"
              minLength={6}
            />
            <br />
            <input
              type="password"
              placeholder="Confirm Password"
              id="confPassword"
              minLength={6}
            />
            <br />
            <button type="submit">Confirm</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default CreateNewPassword;
