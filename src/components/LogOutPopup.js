import React from "react";

function LogOutPopup() {
  return (
    <>
      <div
        className="logOutPopup"
        style={{ paddingTop: "15.938rem", paddingBottom: "15.938rem" }}
      >
        <div
          className="logOutPopup-box"
          style={{ width: "100%", borderRadius: "3.125rem" }}
        >
          <form>
            <img src={require("../images/Logout-Icon.png")} alt="LogOut" />
            <h1 style={{ paddingTop: "1.25rem" }}>Log Out</h1>
            <h3>Are you sure you want to leave?</h3>
            <button type="submit" className="noBtn">
              No
            </button>
            <button type="submit">Yes</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default LogOutPopup;
