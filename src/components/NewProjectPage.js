import React from "react";

function NewProjectPage() {
  return (
    <>
      <div className="newProject-Page">
        <div className="newProject-box">
          <div className="newProject-cont">
            <h2 style={{ marginBottom: "2.188rem", textAlign: "center" }}>
              New Project
            </h2>

            <h4>Client Name</h4>
            <input type="text" id="clientName" />

            <h4>Person in Charge</h4>
            <input type="text" id="personCharge" />

            <h4>Email Address</h4>
            <input type="text" id="email" />

            <h4>Phone Number</h4>
            <input type="text" id="phNumber" />

            <div className="buttons">
              <button type="submit" className="noBtn">
                Back
              </button>
              <button type="submit">Create</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default NewProjectPage;
