import React, { forwardRef, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../../css/Signup/SignupForm.css";
import db, { auth } from "../../firebase";
// import firebase from "firebase";
import isEmail from "validator/es/lib/isEmail";

const SignupForm = forwardRef(({ emailSend, emailEn }, ref) => {
  const [email, setEmail] = useState(emailSend ? emailSend : "");
  const [hasEmail, setHasEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [hasPassword, setHasPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [hasUsername, setHasUsername] = useState("");
  const [usernameValid, setUsernameValid] = useState();
  const [emailValid, setEmailValid] = useState();
  const [passwordValid, setPasswordValid] = useState();

  useEffect(() => {
    if (email.length > 0) {
      setHasEmail(true);
    } else {
      setHasEmail(false);
    }
  }, [email.length]);

  const setValueEmail = (e) => {
    const value = e.target.value;
    if (value.length > 0) {
      if (value.length > 4 && isEmail(value)) {
        setEmailValid(true);
      } else {
        setEmailValid(false);
      }
      setHasEmail(true);
    } else {
      setHasEmail(false);
    }
    setEmail(value);
  };

  const setValuePassword = (e) => {
    const value = e.target.value;
    if (value.length > 0) {
      if (value.length > 4) {
        setPasswordValid(true);
      } else {
        setPasswordValid(false);
      }
      setHasPassword(true);
    } else {
      setHasPassword(false);
    }
    setPassword(value);
  };

  const setValueUsername = (e) => {
    const value = e.target.value;
    if (value.length > 0) {
      if (value.length > 4) {
        setUsernameValid(true);
      } else {
        setUsernameValid(false);
      }
      setHasUsername(true);
    } else {
      setHasUsername(false);
    }
    setUsername(value);
  };

  const createAccount = (e) => {
    e.preventDefault();
    const btn = document.querySelector(".regForm--button");
    btn.style.opacity = 0.8;
    setLoading(true);
    if (email.length > 4 && isEmail(email)) {
      if (password.length > 4) {
        if (username.length > 4) {
          db.collection("users")
            .doc(email)
            .get()
            .then((doc) => {
              if (doc.exists) {
                setEmailError("Email already in use!");
              } else {
                console.log(username);
                auth
                  .createUserWithEmailAndPassword(email, password)
                  .then((userInfo) => {
                    console.log(userInfo.user);
                    localStorage.setItem("username", null);
                    localStorage.setItem("username", username);
                    localStorage.setItem("UserValue", JSON.stringify(userInfo));
                  })
                  .catch((err) => alert(err.message));
                history.push(`/successful`);
              }
            })
            .catch((err) => alert(err.message));
        } else {
          setUsernameError("Username must be greater than 4 letters!");
          setUsername("");
        }
      } else {
        setPasswordError("Password must be between 4 to 40 letters");
        setPassword("");
      }
    } else {
      setEmailError("Enter a correct Email address to continue");
    }
    setTimeout(() => {
      setLoading(false);
      btn.style.opacity = 1;
    }, 600);
  };

  return (
    <form ref={ref} className="regForm">
      <div className="regFormContainer">
        <div className="regFormHeader">
          <span>
            STEP <b>1</b> OF <b>3</b>
          </span>
          <h1>Create a password to start your membership.</h1>
          <p>Just a few more steps and you're done!</p>
          <p style={{ marginBottom: "10px" }}> We hate paperwork, too.</p>
        </div>
        <div className="regFormInput">
          <div className="regFormUsernameInput">
            <input
              autoComplete="off"
              className={`regForm__usernameInput ${hasUsername && "hasText"} ${
                usernameValid ? "valid" : "error"
              }`}
              value={username}
              onChange={setValueUsername}
              type="text"
              id="username"
            />
            <label htmlFor="username">Full Name</label>
          </div>
          {usernameError && <p className="error__username">{usernameError}</p>}
          <div className="regFormEmailInput">
            <input
              autoComplete="off"
              className={`regForm__emailInput ${hasEmail && "hasText"} ${
                emailValid ? "valid" : "error"
              }`}
              value={email}
              onChange={setValueEmail}
              type="text"
              id="email"
            />
            <label htmlFor="email">Email</label>
          </div>
          {emailError && <p className="error__email">{emailError}</p>}
          <div className="regFormPasswordInput">
            <input
              className={`regForm__passwordInput ${hasPassword && "hasText"} ${
                passwordValid ? "valid" : "error"
              }`}
              onChange={setValuePassword}
              value={password}
              type="password"
              id="password"
            />
            <label htmlFor="password">Add a password</label>
            {passwordError && (
              <p className="error__password">{passwordError}</p>
            )}
          </div>
        </div>
        <div className="regFormButton">
          <button
            className="regForm--button"
            onClick={createAccount}
            type="submit"
          >
            {loading ? (
              <img
                alt="img"
                src="https://i.ibb.co/ZBy1TCN/a925c524-8926-4c7b-a7ea-fa456ed52214.png"
                className="loading__img"
              />
            ) : (
              "CONTINUE"
            )}
          </button>
        </div>
      </div>
    </form>
  );
});

export default SignupForm;
