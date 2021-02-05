import React from "react";
import "../../css/Dashboard/Footer.css";
import MailIcon from "@material-ui/icons/Mail";

const Footer = ({ mode }) => {
  return (
    <div
      className={`footer ${mode == "dark" && "footer__dark"} ${
        mode == "light" && "footer__light"
      }`}
    >
      <div className={`myDetails ${mode == "light" && "myDetails__light"}`}>
        <h2>
          This Netflix clone is created by{" "}
          <a
            target="_blank"
            href="https://www.instagram.com/asad0908_programmer/"
          >
            Asad Aslam Memon
          </a>
        </h2>
      </div>
      <div className={`contact__me ${mode == "light" && "contact__me--light"}`}>
        <a href="mailto:amdeveloping0908@gmail.com">
          <MailIcon />
          <span>amdeveloping0908@gmail.com</span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
