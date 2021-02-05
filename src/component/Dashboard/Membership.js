import React, { useState } from "react";
import "../../css/Dashboard/Membership.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useHistory } from "react-router-dom";

const Membership = () => {
  const [email, setEmail] = useState("");
  const [hasEmail, setHasEmail] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory();

  const sendEmail = (e) => {
    e.preventDefault();
    if (email.length === 0) {
      const field = document.querySelector("label");
      field.focus();
    } else {
      //left
      const emailEncrypt = btoa(email);
      const btn = document.querySelector(".form__button");
      btn.style.opacity = 0.8;
      setLoading(true);
      //   setTimeout(() => {
      //     db.collection("users")
      //       .doc(email)
      //       .get()
      //       .then((doc) => {
      //         if (doc.exists) {
      //           //logic
      //           setError("Email already in use!");
      //         } else {
      //           //logic
      //           history.push(`/signup/${emailEncrypt}/welcome`);
      //         }
      //       })
      //       .catch((err) => alert(err.message));
      //     setLoading(false);
      //     btn.style.opacity = 1;
      //   }, 1000);
    }
  };

  const checkEmail = (e) => {
    const value = e.target.value;
    if (value.length > 0) {
      setHasEmail(true);
    } else {
      setHasEmail(false);
    }
    setEmail(value);
  };

  return (
    <div className="membership">
      <form action="">
        <h3 className="membership__title">
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <div className="membership__formControl">
          <input
            autoComplete="off"
            onChange={checkEmail}
            value={email}
            id="email"
            className={`form__input ${hasEmail && "hasText"}`}
            type="text"
          />
          <label htmlFor="email" className="form__label">
            Email address
          </label>
          <button onClick={sendEmail} className="form__button">
            {loading ? (
              <img
                alt="loading"
                className="form__loading"
                src="https://i.ibb.co/ZBy1TCN/a925c524-8926-4c7b-a7ea-fa456ed52214.png"
              />
            ) : (
              <span className="form__buttonText">
                GET STARTED <ArrowForwardIosIcon />
              </span>
            )}
          </button>
        </div>
      </form>
      <p className="membership__error"> {error ? error : ""}</p>
    </div>
  );
};

export default Membership;
