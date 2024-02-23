import React from "react";

function VerifyEmail() {
  function EmailVarifyOTP(e) {
    e.preventDefault();

    const input1 = document.getElementById("first").value;
    const input2 = document.getElementById("sec").value;
    const input3 = document.getElementById("third").value;
    const input4 = document.getElementById("fourth").value;

    const allInput = [input1, input2, input3, input4];

    if (input1 === "" || input2 === "" || input3 === "" || input4 === "") {
      alert("OTP can't Be Blank");
    }

    console.log("OTP is:", allInput.join(""));
  }

  return (
    <>
      <div className="varify-Email" style={{ padding: "13.875rem 35.625rem" }}>
        <div className="verifyEmail-box">
          <form onSubmit={EmailVarifyOTP}>
            <h1>Verify your email</h1>
            <h3>Please enter the number code sent to your email address.</h3>
            <div className="otpContainer">
            <input type="text" maxLength={1} id="first" />
            <input type="text" maxLength={1} id="sec" />
            <input type="text" maxLength={1} id="third" />
            <input type="text" maxLength={1} id="fourth" /> <br />
            </div>
            <button type="submit" className="resendBtn">
              Resend Code
            </button>
            <button type="submit">Confirm</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default VerifyEmail;
