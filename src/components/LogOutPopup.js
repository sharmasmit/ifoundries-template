import React from "react";

function LogOutPopup() {
  return (
    <>
      <div className="logOutPopup" style={{padding: "15.938rem 35.4rem"}}>
        <div className="logOutPopup-box" style={{width: "100%", borderRadius: "3.125rem"}}>
          <form>
            <img src={require("../images/TrashBox.png")} alt="TrashBox" />
            <h1 style={{ paddingTop: "1.25rem" }}>Log Out</h1>
            <h2>Are you sure you want to leave?</h2>
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
