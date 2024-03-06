import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function MobileSizeMenu() {
  let show = true;

  function ShowMenu() {
    const Icon = document.getElementById("menuBtn");

    if (show) {
      document.getElementById("mobileMenu-box").style.display = "block";
      Icon.style.color = "#E72F27";
      show = false;
    } else {
      document.getElementById("mobileMenu-box").style.display = "none";
      Icon.style.color = "#000000";
      show = true;
    }
  }
  return (
    <>
      <div style={{ marginBottom: "2rem" }} className="MobileMenu">
        <img
          src={require("../images/ifoundries-logo-1.png")}
          className="dashboard-logo"
          alt="Logo"
        />
        <button type="submit" onClick={ShowMenu} id="menuBtn">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <div id="mobileMenu-box">
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
        <h5>
          <Link to="/LogOutPopup">
            {" "}
            <img
              src={require("../images/Account-Logout-Icon.png")}
              alt="LogOutIcon"
            />{" "}
            Log Out
          </Link>
        </h5>
      </div>
    </>
  );
}
export default MobileSizeMenu;
