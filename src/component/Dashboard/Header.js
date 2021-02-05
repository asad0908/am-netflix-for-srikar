import React from "react";
import { Link, useHistory } from "react-router-dom";
import "../../css/Dashboard/Header.css";
import Membership from "./Membership";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const Header = () => {
  const history = useHistory();
  const user = null;

  const GoToApp = () => {
    return (
      <button onClick={() => history.push("/browse")} className="goToApp">
        <span className="form__buttonText">
          GO TO APP <ArrowForwardIosIcon />
        </span>
      </button>
    );
  };

  return (
    <div className="header">
      <div className="header__background"></div>
      <div className="header__head">
        <img
          className="header__logo"
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt="Netflix-logo"
        />

        <div className="buttonContainSuper">
          {user ? (
            <button
              style={{ border: 0 }}
              //   onClick={signoutUser}
              className="header__button"
            >
              Sign Out
            </button>
          ) : (
            <Link to="/login">
              <a className="header__button">Sign In</a>
            </Link>
          )}
        </div>
      </div>
      <div className="header__body">
        <h1 className="header__bodyTitle">
          Unlimited movies, TV shows and more.
        </h1>
        <h2 className="header__bodyInfo">Watch anywhere. Cancel anytime.</h2>
        {user ? <GoToApp /> : <Membership />}
      </div>
    </div>
  );
};

export default Header;
