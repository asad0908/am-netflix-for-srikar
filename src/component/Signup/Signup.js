import React from "react";
import { useParams } from "react-router-dom";
import SignupHeader from "./SignupHeader";
import "../../css/Signup/Signup.css";
import SignupForm from "./SignupForm";
import Footer from "../Dashboard/Footer";
import FlipMove from "react-flip-move";
import SignupWelcome from "./SignupWelcome";

const Signup = () => {
  const { email, page } = useParams();
  const emailDecrypt = atob(email);

  return (
    <div>
      <SignupHeader key="header" />
      <div key="simple" className="simpleContainer">
        {page == "welcome" ? (
          <FlipMove>
            <SignupWelcome key="welcome" email={email} />
          </FlipMove>
        ) : page == "regForm" ? (
          <FlipMove>
            <SignupForm key="form" emailEn={email} emailSend={emailDecrypt} />
          </FlipMove>
        ) : (
          ""
        )}
      </div>
      <Footer key="footer" mode="light" />
    </div>
  );
};

export default Signup;
