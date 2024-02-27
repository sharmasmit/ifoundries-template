import React, { useState } from "react";

function AboutNewProject() {
  const [ipValue, setIpValue] = useState("");

  function handleInputClick() {
    setIpValue("$ 90,000");
  }

  return (
    <>
      <div className="aboutNewProject">
        <div className="projectInnerBox">
          <h2>New Project</h2>
          {/* Project Details Flex Box */}
          <div className="projectFlexBox">
            {/* Card-1 */}
            <div className="card-1 card">
              <h4>Project Name</h4>
              <input
                type="text"
                className="stateIP"
              />

              <h4>Project Status</h4>
              <div className="styled-select">
                <select>
                  <option>Not yet started</option>
                  <option>Design phase</option>
                  <option>Development</option>
                  <option>Content population phase</option>
                  <option>UAT phase</option>
                  <option>Preparing to go live</option>
                  <option>Project launched</option>
                </select>
              </div>

              <h4>Project Manager</h4>
              <div className="styled-select">
                <select>
                  <option>Jovie</option>
                  <option>Zahid</option>
                  <option>Han Feng</option>
                </select>
              </div>

              <h4>Developer Team</h4>
              <div className="styled-select">
                <select>
                  <option>India</option>
                  <option>Vietnam</option>
                </select>
              </div>

              <h4>Developer Name</h4>
              <div className="styled-select">
                <select>
                  <option>Nathan</option>
                  <option>Rushi</option>
                </select>
              </div>
            </div>
            {/* Card-2 */}
            <div className="card-2 card">
              <h4>Sales Person</h4>
              <div className="styled-select">
                <select>
                  <option>Person 1</option>
                  <option>Person 2</option>
                </select>
              </div>
              <h4>Start Date</h4>
              <input type="date" />

              <h4>End Date</h4>
              <input type="date" />

              <h4>Design Sign-Off</h4>
              <div className="styled-select">
                <select>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>

              <h4>Pre-Launch Sign-Off</h4>
              <div className="styled-select">
                <select>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>
            {/* Card-3 */}
            <div className="card-3 card ">
              <h4>Unbilled Amount</h4>
              <input
                type="text"
                value={ipValue}
                onClick={handleInputClick}
                className="stateIP"
              />

              <h4>Grand Option</h4>
              <div className="styled-select">
                <select>
                  <option>PSG</option>
                  <option>EDG</option>
                  <option>Standard</option>
                </select>
              </div>

              <h4>Progress</h4>
              <div className="styled-select">
                <select>
                  <option>10%</option>
                  <option>20%</option>
                  <option>30%</option>
                </select>
              </div>

              <h4>Remark</h4>
              <textarea></textarea>
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
export default AboutNewProject;
