import React from "react";
import LeftSideMenu from "./LeftSideMenu";
import MobileSizeMenu from "./MobileSizeMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

function ProjectInformation() {
  return (
    <>
      <div className="project-information">
        <LeftSideMenu className="menu-left" />
        <div className="ProjectImfo-Main">
          <MobileSizeMenu />
          <div className="projectInfo-box">
            <FontAwesomeIcon icon={faAngleLeft} className="Left-Arrow" />
            <div className="projectInfo-child1" style={{ marginTop: "0" }}>
              <img
                src={require("../images/EditButton.png")}
                alt="editBtn"
                className="editBtn1"
              />
              <h2>Project Details</h2>
              <div className="project-top-cont">
                <div className="projectBox-inner">
                  <h4>Project Name</h4>
                  <h5>Example</h5>
                </div>
                <div className="projectBox-inner">
                  <h4>Project Manager</h4>
                  <h5>Example</h5>
                </div>
                <div className="projectBox-inner">
                  <h4>Developer Team</h4>
                  <h5>Vietnam</h5>
                </div>
                <div className="projectBox-inner">
                  <h4>Developer Name</h4>
                  <h5>Example</h5>
                </div>
                <div className="projectBox-inner">
                  <h4>Project Status</h4>
                  <h5>Design phase</h5>
                </div>
                <div className="projectBox-inner">
                  <h4>Progress [%]</h4>
                  <h5>80%</h5>
                </div>
                <div className="projectBox-inner">
                  <h4>Project Start Date</h4>
                  <h5>00/00/0000</h5>
                </div>
                <div className="projectBox-inner">
                  <h4>Project End Date</h4>
                  <h5>00/00/0000</h5>
                </div>
              </div>

              <div className="project-bottom-cont">
                <div className="project-Bcont">
                  <div className="project-card">
                    <h4>Hosting Information</h4>
                    <h5 style={{ paddingTop: "0" }}>Hosting: Yes</h5>
                    <h5>IP Address: 192.168.0.1</h5>
                    <h5>Start Date: 00/00/0000</h5>
                    <h5>End Date: 00/00/0000</h5>
                    <h5>Duration: 8 Months</h5>
                  </div>
                  <div className="project-card">
                    <h4>Domain Infomation</h4>
                    <h5 style={{ paddingTop: "0" }}>
                      Domain Availability: Yes
                    </h5>
                    <h5>Domain Provider Name: Abc</h5>
                    <h5>Start Date: 00/00/0000</h5>
                    <h5>End Date: 00/00/0000</h5>
                    <h5>Duration: 8 Months</h5>
                  </div>
                  <div className="project-card">
                    <h4>Maintenance Information</h4>
                    <h5 style={{ paddingTop: "0" }}>Start Date: 00/00/0000</h5>
                    <h5>End Date: 00/00/0000</h5>
                    <h5>Duration: 8 Months</h5>
                    <h5>Hours: 45 hours</h5>
                    <h5>Price: $50,000</h5>
                  </div>

                  <div className="project-card Bottom-card">
                    <h4>Sales Person</h4>
                    <h5>Name</h5>
                  </div>
                  <div className="project-card Bottom-card">
                    <h4>Design Sign-Off</h4>
                    <h5>Yes</h5>
                  </div>
                  <div className="project-card Bottom-card">
                    <h4>Unbilled Amount</h4>
                    <h5>$20,000</h5>
                  </div>
                  <div className="project-card Bottom-card">
                    <h4>Grant Option</h4>
                    <h5>PSG</h5>
                  </div>
                  <div className="project-card Bottom-card">
                    <h4>Pre-Launch Sign-Off</h4>
                    <h5>No</h5>
                  </div>
                  <div className="project-card Bottom-card">
                    <h4>Remark</h4>
                    <h5>Fixing email notification issues.</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="projectInfo-child2">
              <div className="client-details">
                <h2>Client Details</h2>
                <img
                  src={require("../images/EditButton.png")}
                  alt="editBtn"
                  className="editBtn2"
                />
                <h4 style={{ marginTop: "0", paddingTop: "0.938rem" }}>
                  Client Name
                </h4>
                <h5>Example</h5>

                <h4>Person in Charge</h4>
                <h5>Example</h5>

                <h4>Email Address</h4>
                <h5>example@gmail.com</h5>

                <h4>Phone Number</h4>
                <h5>+65 1234 5678</h5>
              </div>
              <div className="prices">
                <h2>Prices</h2>
                <img
                  src={require("../images/EditButton.png")}
                  alt="editBtn"
                  className="editBtn3"
                />
                <h5>Hosting Price: $</h5>
                <h5>Domain Price: $</h5>
                <h5>Hosting & domain Price: $</h5>
                <h5>Maintenance Price: $</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProjectInformation;
