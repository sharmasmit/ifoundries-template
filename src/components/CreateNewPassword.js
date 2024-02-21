import React from "react";

function CreateNewPassword() {
  function CreatePassword() {
    let pass1 = document.getElementById("password").value;
    let pass2 = document.getElementById("confPassword").value;

    if (pass1 === pass2) {
      alert("New Password Created");
      console.log("Password is: ", pass1);
    } else {
      alert("Confirm Password Must be Same");
      pass2 = " ";
    }
  }

  return (
    <>
      <div className="create-pass">
        <div className="create-pass-box">
          <form>
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
            />{" "}
            <br />
            <input
              type="password"
              placeholder="Confirm Password"
              id="confPassword"
              minLength={6}
            />{" "}
            <br />
            <button type="submit" onClick={CreatePassword}>
              Confirm
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default CreateNewPassword;
