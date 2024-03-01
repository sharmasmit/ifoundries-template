import React from "react";
import ProjectStatus from "./ProjectStatus";
import ProjectManager from "./ProjectManager";
import DeveloperTeam from "./DeveloperTeam";
import DomainPeriod from "./DomainPeriod";
import HostingPeriod from "./HostingPeriod";
import MaintenancePeriod from "./MaintenancePeriod";

function FilterByMenu() {
  return (
    <>
      <div className="filterBy-Main">
        <div className="blank"></div>

        <div className="filterBy-menu">
          <h1 style={{ marginBottom: "0.938rem" }}>Filter By</h1>
          <div className="filterMenu-inner">
            {/* Button 1 Project Status */}
            <ProjectStatus />
            {/* Button 2 Project Manager*/}
            <ProjectManager />
            {/* Button 3 Developer Team*/}
            <DeveloperTeam />
            {/* Button 4 Domain Period*/}
            <DomainPeriod />
            {/* Button 5 Hosting Team*/}
            <HostingPeriod />
            {/* Button 6 Maintenance Period */}
            <MaintenancePeriod />
          </div>
          <div
            className="butttons"
            style={{ position: "absolute", bottom: "3.125rem" }}
          >
            <button type="submit" className="noBtn">
              Reset
            </button>
            <button type="submit">Apply</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default FilterByMenu;
