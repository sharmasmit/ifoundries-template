import React from "react";

function DeleteYourProjects() {
  return (
    <>
      <div className="deleteProject">
        <div className="deleteProject-box">
          <form>
            <img src={require("../images/TrashBox.png")} alt="TrashBox" />
            <h1 style={{ paddingTop: "1.25rem" }}>
              Are you sure you want to delete your projects?
            </h1>
            <h3>You will not be able to recover them afterwards</h3>
            <button type="submit" className="noBtn">
              No
            </button>
            <button type="submit">Yes</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default DeleteYourProjects;
