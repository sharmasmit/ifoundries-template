import React from 'react'

function MaintenancePeriod() {

    let show = true;

    function showCheckBoxes6() {
      let checkBoxes6 = document.getElementById("checkBoxes-6");
      let dropdownBTN6 = document.getElementById("dropdownBTN6");
  
      if (show) {
        checkBoxes6.style.display = "block";
        dropdownBTN6.style.color = "#E72F27";
        show = false;
      } else {
        checkBoxes6.style.display = "none";
        dropdownBTN6.style.color = "black";
        show = true;
      }
    }

    return (
    <>
    {/* Button 6 Maintenance Period */}
    <div className="selectBox" onClick={showCheckBoxes6}>
        <button type="submit" id="dropdownBTN4">
          Domain Period
        </button>
      </div>

      <div id="checkBoxes-6">
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
  )
}
export default MaintenancePeriod;