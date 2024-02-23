import React, { useState } from "react";

function NewProjectDetails() {
  const [ipValue, setIpValue] = useState("");

  function handleInputClick() {
    setIpValue("192.168.0.0");
  }

  return (
    <>
      <div className="projectDetails-page">
        <div className="projectInnerBox">
          <h2>New Project</h2>
          {/* Project Details Flex Box */}
          <div className="projectFlexBox">
            {/* Hosting */}
            <div className="card-1 card">
              <h4>Hosting</h4>
              <div className="styled-select">
                <select>
                  <option>Shared hosting.</option>
                  <option>VPS hosting.</option>
                  <option>Dedicated server hosting.</option>
                  <option>Cloud hosting.</option>
                </select>
              </div>
              <h4>If Yes, state IP Address</h4>
              <input
                type="text"
                value={ipValue}
                onClick={handleInputClick}
                className="stateIP"
              />

              <h4>Start Date</h4>
              <input type="date" />

              <h4>End Date</h4>
              <input type="date" />

              <h4>Duration</h4>
              <div className="dropDownBox">
                <input type="button"></input>
                <div className="dropDown-containt">
                  <h5>1 Month</h5>
                  <h5>2 Month</h5>
                  <h5>3 Month</h5>
                </div>
              </div>
            </div>
            {/* Domain */}
            <div className="card-2 card">
              <div className="styled-select">
                <h4>Domain Availability</h4>
                <select>
                  <option>Available</option>
                  <option>Not Available</option>
                </select>
              </div>
              <h4>State Domain name</h4>
              <input type="text" />

              <h4>Start Date</h4>
              <input type="date" />

              <h4>End Date</h4>
              <input type="date" />

              <h4>Duration</h4>
              <div className="dropDownBox">
                <input type="button"></input>
                <div className="dropDown-containt">
                  <h5>1 Month</h5>
                  <h5>2 Month</h5>
                  <h5>3 Month</h5>
                </div>
              </div>
            </div>
            {/* Maintenence Hours */}
            <div className="card-3 card">
              <h4>Maintenance Hours</h4>
              <input type="text" />

              <h4>Maintenance Price</h4>
              <input type="tel" />

              <h4>Start Date</h4>
              <input type="date" />

              <h4>End Date</h4>
              <input type="date" />

              <h4>Duration</h4>
              <div className="dropDownBox">
                <input type="button"></input>
                <div className="dropDown-containt">
                  <h5>1 Month</h5>
                  <h5>2 Month</h5>
                  <h5>3 Month</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="buttons">
            <button type="submit" className="noBtn">
              Back
            </button>
            <button type="submit">Next</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewProjectDetails;
