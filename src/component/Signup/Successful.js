import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "../../css/Signup/Successful.css";

const Successful = () => {
  const user = useSelector((state) => state.User.user);
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      // history.push("/browse");
    }, 15000);
  });
  return (
    <div className="successful">
      <div className="successful__header">
        <img
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt="NEtflix-logo"
        />
        {user ? (
          <button
            style={{ border: 0 }}
            onClick={() => {}}
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
      <div className="successful__body">
        <div className="successful__container">
          <div className="container__info">
            <h2>Successfully Registered</h2>
            <p>
              Your Payment was successful and now you can <br /> enjoy premium
              quality movies from your devices <br /> Hope you will enjoy!
            </p>
          </div>
          <div className="container__button">
            <button
              onClick={() => history.push("/netflix")}
              className="button__button--button"
            >
              GO TO APP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Successful;
