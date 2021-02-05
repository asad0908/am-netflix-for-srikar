import React, { forwardRef } from "react";
import "../../css/Signup/SignupWelcome.css";
import { Link } from "react-router-dom";

const SignupWelcome = forwardRef(({ email }, ref) => {
  return (
    <div ref={ref} className="signupWelcome">
      <div className="welcome__body">
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png"
          alt=""
        />
        <div className="welcome__content">
          <p>
            STEP <span>1</span> OF <span>3</span>
          </p>
          <h2>Finish setting up your account</h2>
          <p className="welcome__content--info">
            Netflix is personalised for you. Create a password to watch Netflix
            on any device at any time.
          </p>
        </div>
        <div className="welcome__btn--container">
          <Link to={`/signup/${email}/regForm`}>
            <button type="button">CONTINUE</button>
          </Link>
        </div>
      </div>
    </div>
  );
});

export default SignupWelcome;
