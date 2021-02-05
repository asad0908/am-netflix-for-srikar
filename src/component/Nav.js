import React, { useEffect, useState } from "react";
import "../css/Nav.css";

const Nav = () => {
  const [show, handleShow] = useState(false);
  const transitionHandler = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionHandler);
    return () => window.removeEventListener("scroll", transitionHandler);
  }, []);

  return (
    <div className={`nav ${show ? "nav__black" : ""}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <img
          className="nav__avatar"
          src="https://ih0.redbubble.net/image.618369215.1083/flat,1000x1000,075,f.u2.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Nav;
