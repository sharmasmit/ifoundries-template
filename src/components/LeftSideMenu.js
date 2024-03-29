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
          <Link to="#">
            <img
              src={require("../images/Dashboard-icon.png")}
              alt="Dashboard-img"
            />
            Dashboard
          </Link>
        </h5>
        <h5>
          <Link to="#">
            <img src={require("../images/Imort-icon.png")} alt="ImportData" />{" "}
            Import Data
          </Link>
        </h5>
        <h5>
          <Link to="#">
            {" "}
            <img
              src={require("../images/Export-icon.png")}
              alt="ExportData"
            />{" "}
            Export Data
          </Link>
        </h5>
        <h5>
          <Link to="#">
            {" "}
            <img
              src={require("../images/Settings-icon.png")}
              alt="SettingsIcon"
            />{" "}
            Settings
          </Link>
        </h5>
        <h5 className="menu-logOut">
          <Link to="/LogOutPopup"> <img src={require("../images/Account-Logout-Icon.png")} alt="LogOutIcon" /> Log Out</Link>
        </h5>
      </div>
    </>
  );
}
export default LeftSideMenu;
