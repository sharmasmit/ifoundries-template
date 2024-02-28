import React from "react";
import LeftSideMenu from "./LeftSideMenu";
import { Link } from "react-router-dom";

function AccountSettings() {
  return (
    <>
      <div className="AcSettings-page">
        <LeftSideMenu />
        <div className="AcSettings-box">
          <div className="AcSettings-inner">
            <h1 style={{ textAlign: "center", marginBottom: "2.188rem" }}>
              Account Settings
            </h1>

            <h4>
              Name<span>*</span>
            </h4>
            <input type="text" />

            <h4>
              Email Address <span>*</span>
            </h4>
            <input type="email" />

            <h4>Password</h4>
            <div className="input-container">
              <Link to="/ChangePassword" className="changeLink">
                Change
              </Link>
              <input type="password" />
            </div>

            <h4>Title in iFoundries</h4>
            <input type="text" placeholder="Project Manager" />

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
export default AccountSettings;
