import React from "react";

function ProjectStatus() {
  let show = true;

  function showCheckBoxes1() {
    let checkBoxes1 = document.getElementById("checkBoxes-1");
    let dropdownBTN1 = document.getElementById("dropdownBTN1");

    if (show) {
      checkBoxes1.style.display = "block";
      dropdownBTN1.style.color = "#E72F27";
      show = false;
    } else {
      checkBoxes1.style.display = "none";
      dropdownBTN1.style.color = "black";
      show = true;
    }
  }

  return (
    <>
      {/* Buttton 1 Project Status */}
      <div className="selectBox" onClick={showCheckBoxes1}>
        <button type="submit" id="dropdownBTN1">
          Project Status
        </button>
      </div>

      <div id="checkBoxes-1" className="CheckBoxes">
        <label for="option-1" className="label-container">
          <input type="checkbox" id="option-1" />
          Not Yet Started <span className="checkMark"></span>
        </label>
        <br />

        <label for="option-2" className="label-container">
          <input type="checkbox" id="option-2" />
          Design Phase<span className="checkMark"></span>
        </label>
        <br />

        <label for="option-3" className="label-container">
          <input type="checkbox" id="option-3" />
          Development Phase<span className="checkMark"></span>
        </label>
        <br />

        <label for="option-4" className="label-container">
          <input type="checkbox" id="option-4" />
          Content Population Phase<span className="checkMark"></span>
        </label>
        <br />

        <label for="option-5" className="label-container">
          <input type="checkbox" id="option-5" />
          UAT Phase<span className="checkMark"></span>
        </label>
        <br />

        <label for="option-6" className="label-container">
          <input type="checkbox" id="option-6" />
          Preparing To Live<span className="checkMark"></span>
        </label>
        <br />

        <label for="option-7" className="label-container">
          <input type="checkbox" id="option-7" />
          Project launch<span className="checkMark"></span>
        </label>
        <br />

        <label for="option-8" className="label-container">
          <input type="checkbox" id="option-8" />
          Preparing for Training<span className="checkMark"></span>
        </label>
        <br />

        <label for="option-9" className="label-container">
          <input type="checkbox" id="option-9" />
          Aftersales Support<span className="checkMark"></span>
        </label>
        <br />

        <label for="option-10" className="label-container">
          <input type="checkbox" id="option-10" />
          Paid Maintenance<span className="checkMark"></span>
        </label>
        <br />

        <label for="option-11" className="label-container">
          <input type="checkbox" id="option-11" />
          Paused<span className="checkMark"></span>
        </label>
        <br />

        <label for="option-12" className="label-container">
          <input type="checkbox" id="option-12" />
          Terminated<span className="checkMark"></span>
        </label>
        <br />

        <label for="option-13" className="label-container">
          <input type="checkbox" id="option-13" />
          Closed<span className="checkMark"></span>
        </label>
        <br />

        <label for="option-14" className="label-container">
          <input type="checkbox" id="option-14" />
          Overdue<span className="checkMark"></span>
        </label>
        <br />
      </div>
    </>
  );
}
export default ProjectStatus;
