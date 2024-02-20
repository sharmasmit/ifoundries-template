import React from "react";

function LogoImage() {
  return (
    <>
      <div className="logoImg">
        <img src={require("../images/ifoundries-logo 1.png")}></img>
        <img src={require("../images/LogoImg.png")} className="logo-bottom"></img>
      </div>
    </>
  );
}
export default LogoImage;
