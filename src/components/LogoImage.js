import React from "react";

function LogoImage() {
  return (
    <>
      <div className="logoImg">
        <div>
          <img
            src={require("../images/ifoundries-logo 1.png")}
            alt="Logo"
            className="logo"
          ></img>
          <img
            src={require("../images/LogoImg.png")}
            alt="BottomImage"
            className="logo-bottom"
          ></img>
        </div>
      </div>
    </>
  );
}
export default LogoImage;
