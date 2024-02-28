import React from "react";

function DomainPeriod() {
  let show = true;

  function showCheckBoxes4() {
    let checkBoxes4 = document.getElementById("checkBoxes-4");
    let dropdownBTN4 = document.getElementById("dropdownBTN4");

    if (show) {
      checkBoxes4.style.display = "block";
      dropdownBTN4.style.color = "#E72F27";
      show = false;
    } else {
      checkBoxes4.style.display = "none";
      dropdownBTN4.style.color = "black";
      show = true;
    }
  }

  return (
    <>
      {/* Button 4 Devceloper Team */}
      <div className="selectBox" onClick={showCheckBoxes4}>
        <button type="submit" id="dropdownBTN4">
          Domain Period
        </button>
      </div>

      <div id="checkBoxes-4">
        <label className="label-container">
          <input type="checkbox" id="option-1" />
          Less then 1 Months<span className="checkMark"></span>
        </label>
        <br />

        <label className="label-container">
          <input type="checkbox" id="option" />
          Less then 3 Months<span className="checkMark"></span>
        </label>
        <br />
        
        <label className="label-container">
          <input type="checkbox" id="option" />
          Expired<span className="checkMark"></span>
        </label>
        <br />
      </div>
    </>
  );
}
export default DomainPeriod;
