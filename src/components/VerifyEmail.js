import React from "react";

export default function VerifyEmail() {
  function clickEvent(first, last) {
    if (first.value.length) {
      document.getElementById(last).focus();
    }
  }

  return (
    <>
      <div className="varify-Email">
        <div className="verifyEmail-box">
          <form>
            <h1>Verify your email</h1>
            <h2>Please enter the number code sent to your email address.</h2>
            <input
              type="text"
              maxLength={1}
              id="first"
              onkeyup="clickEvent(this,'sec')"
            />
            <input
              type="text"
              maxLength={1}
              id="sec"
              onkeyup="clickEvent(this,'third')"
            />
            <input
              type="text"
              maxLength={1}
              id="third"
              onkeyup="clickEvent(this,'fourth')"
            />
            <input type="text" maxLength={1} id="fourth" /> <br />
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
