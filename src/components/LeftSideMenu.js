import React from "react";
import { Link } from "react-router-dom";

function LeftSideMenu() {
  return (
    <>
      <div className="leftSide-menu">
        <img
          src={require("../images/ifoundries-logo-1.png")}
          alt="Logo"
          className="dashboard-logo"
        />
        <h5>
          <Link to="#">Dashboard</Link>
        </h5>
        <h5>
          <Link to="#">Import Data</Link>
        </h5>
        <h5>
          <Link to="#">Export Data</Link>
        </h5>
        <h5>
          <Link to="#">Settings</Link>
        </h5>
        <h5 className="menu-logOut">
          <Link to="/LogOutPopup">Log Out</Link>
        </h5>
      </div>
    </>
  );
}
export default LeftSideMenu;
