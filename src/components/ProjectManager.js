import React from "react";

function ProjectManager() {
  let show = true;

  function showCheckBoxes2() {
    let checkBoxes2 = document.getElementById("checkBoxes-2");
    let dropdownBTN2 = document.getElementById("dropdownBTN2");

    if (show) {
      checkBoxes2.style.display = "block";
      dropdownBTN2.style.color = "#E72F27";
      show = false;
    } else {
      checkBoxes2.style.display = "none";
      dropdownBTN2.style.color = "black";
      show = true;
    }
  }

  return (
    <>
      {/* Button 2 Project Manager */}
      <div className="selectBox" onClick={showCheckBoxes2}>
        <button type="submit" id="dropdownBTN2">
          Project Manager
        </button>
      </div>

      <div id="checkBoxes-2">
        <label className="label-container">
          <input type="checkbox" id="option-1" />
          Jovie<span className="checkMark"></span>
        </label>
        <br />

        <label className="label-container">
          <input type="checkbox" id="option" />
          Han Feng<span className="checkMark"></span>
        </label>
        <br />

        <label className="label-container">
          <input type="checkbox" id="option" />
          Zahid<span className="checkMark"></span>
        </label>
        <br />
      </div>
    </>
  );
}
export default ProjectManager;
