import React from "react";

function DeveloperTeam() {
  let show = true;

  function showCheckBoxes3() {
    let checkBoxes3 = document.getElementById("checkBoxes-3");
    let dropdownBTN3 = document.getElementById("dropdownBTN3");

    if (show) {
      checkBoxes3.style.display = "block";
      dropdownBTN3.style.color = "#E72F27";
      show = false;
    } else {
      checkBoxes3.style.display = "none";
      dropdownBTN3.style.color = "black";
      show = true;
    }
  }

  return (
    <>
      {/* Button 3 Devceloper Team */}
      <div className="selectBox" onClick={showCheckBoxes3}>
        <button type="submit" id="dropdownBTN3">
        Developer Team
        </button>
      </div>

      <div id="checkBoxes-3">
        <label className="label-container">
          <input type="checkbox" id="option-1" />
          India<span className="checkMark"></span>
        </label>
        <br />

        <label className="label-container">
          <input type="checkbox" id="option" />
          Vietnam<span className="checkMark"></span>
        </label>
        <br />

      </div>
    </>
  );
}
export default DeveloperTeam;
