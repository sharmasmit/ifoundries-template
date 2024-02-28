import React from 'react'

function HostingPeriod() {

    let show = true;

    function showCheckBoxes5() {
      let checkBoxes5 = document.getElementById("checkBoxes-5");
      let dropdownBTN5 = document.getElementById("dropdownBTN5");
  
      if (show) {
        checkBoxes5.style.display = "block";
        dropdownBTN5.style.color = "#E72F27";
        show = false;
      } else {
        checkBoxes5.style.display = "none";
        dropdownBTN5.style.color = "black";
        show = true;
      }
    }

  return (
    <>
    {/* Button 5 Hosting Period */}
    <div className="selectBox" onClick={showCheckBoxes5}>
        <button type="submit" id="dropdownBTN5">
        Hosting Period
        </button>
      </div>

      <div id="checkBoxes-5">
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
export default HostingPeriod;