import React from "react";
import LeftSideMenu from "./LeftSideMenu";

function ChangePassword() {
  return (
    <>
      <div className="changePass">
        <LeftSideMenu className="menu-left" />
        <div className="changePass-box">
          <div className="changePass-inner">
            <h1 style={{ textAlign: "center", marginBottom: "2.188rem" }}>Change Password</h1>

            <h4>Old Password <span>*</span></h4>
            <input type="password" id="old-password" />

            <h4>New Password</h4>
            <input type="password" id="newPassword" />

            <h4>Confirm Password</h4>
            <input type="password" id="confPassword" />

            <div className="buttons">
              <button type="submit" className="noBtn">
                Back
              </button>
              <button type="submit">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ChangePassword;
