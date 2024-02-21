import React from "react";

export default function CreateNewPassword() {
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
            <input type="text" placeholder="Enter your password" /> <br />
            <input type="text" placeholder="Confirm Password" /> <br />
            <button type="submit">Confirm</button>
          </form>
        </div>
      </div>
    </>
  );
}
