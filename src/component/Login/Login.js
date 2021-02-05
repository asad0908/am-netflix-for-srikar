import React, { useEffect, useState } from "react";
import "../../css/Login/Login.css";
import { Link, useHistory } from "react-router-dom";
import db, { auth, provider } from "../../firebase";
import { useSelector } from "react-redux";
import isEmail from "validator/es/lib/isEmail";

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [emailThere, setEmailThere] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordThere, setPasswordThere] = useState(false);
  const [passwordValid, setPasswordValid] = useState(true);
  const [recaptcha, setRecaptcha] = useState(false);
  const history = useHistory();
  const user = useSelector((state) => state.User.user);

  useEffect(() => {
    setTimeout(() => {
      if (user) {
        history.push("/profile");
      }
    }, 1000);
  }, [user, history]);

  const passToggle = () => {
    const field = document.querySelector(".login__passwordInput");
    field.focus();
    setShowPass(!showPass);
  };

  const signIn = (e) => {
    e.preventDefault();
    if (emailValid) {
      if (passwordValid) {
        auth
          .signInWithEmailAndPassword(email, password)
          .then((user) => {
            //nothing
          })
          .catch((err) => alert(err));
      } else {
        setPasswordValid(false);
        setPassword("");
        setEmail("");
      }
    } else {
      setEmailValid(false);
      setEmail("");
      setPassword("");
    }
  };

  const setCaption = () => {
    setRecaptcha(!recaptcha);
  };

  const fbLogin = () => {
    auth.signInWithPopup(provider).catch((err) => alert(err.message));
  };

  const passwordInputHandler = (e) => {
    const value = e.target.value;
    const btn = document.querySelector(".btn-toggle");
    if (value.length > 0) {
      setPasswordThere(true);
      btn.style.display = "inline";
    } else {
      setPasswordThere(false);
      btn.style.display = "none";
    }
    if (value.length > 4) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
    setPassword(value);
  };

  const checkEmail = (e) => {
    const value = e.target.value;
    // const field = document.querySelector(".login__emailInput");
    if (value.length > 0) {
      setEmailThere(true);
    } else {
      setEmailThere(false);
    }
    if (value.length > 4 && isEmail(value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
    setEmail(value);
  };
  return (
    <div className="login">
      <div className="login__logo">
        <Link to="/">
          <img
            className="login__logoImage"
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt=""
          />
        </Link>
      </div>
      <div className="login__body">
        <div className="login__content">
          <div className="login__content--main">
            <h1>Sign In</h1>
            <form action="">
              <div
                className={`login__email ${emailValid && "login__emailNot"}`}
              >
                <input
                  onChange={checkEmail}
                  value={email}
                  autoComplete="off"
                  type="email"
                  className={`login__emailInput ${emailThere && "hasText"}`}
                  id="email"
                />
                <label className="email__label" htmlFor="email">
                  Email or phone number
                </label>
              </div>
              {!emailValid && (
                <div className="errorEmail">
                  Please enter a valid email address.
                </div>
              )}
              <div
                className={`login__password ${
                  passwordValid && "login__passwordNot"
                }`}
              >
                <div className="flexdir">
                  <div className="input__label">
                    <input
                      onChange={passwordInputHandler}
                      value={password}
                      type={showPass ? "text" : "password"}
                      id="password"
                      className={`login__passwordInput ${
                        passwordThere && "hasText"
                      }`}
                    />
                    <label className="password__label" htmlFor="password">
                      Password
                    </label>
                  </div>
                  <button
                    onClick={passToggle}
                    type="button"
                    className="btn-toggle"
                  >
                    {showPass ? "HIDE" : "SHOW"}
                  </button>
                </div>
              </div>
              {!passwordValid && (
                <div className="errorPassword">
                  Your password must contain between 6 and 60 characters.
                </div>
              )}
              <button
                autoComplete="off"
                className="login__submitBtn"
                type="submit"
                onClick={signIn}
              >
                Sign In
              </button>
              <div className="login__help">
                <div className="login__rememberMe">
                  <input
                    type="checkbox"
                    className="rememberMe"
                    id="rememberMe"
                  />
                  <label htmlFor="rememberMe">
                    <span className="rememberMeSpan">Remember me</span>
                  </label>
                  <div className="helper"></div>
                </div>
                <a className="login__helpLink" href="">
                  Need help?
                </a>
              </div>
            </form>
          </div>
          <div className="login__content--other">
            <div className="login__facebook">
              <div className="login__facebook--btn">
                <hr />
                <button onClick={fbLogin} className="login__facebook--btnMain">
                  <div className="fb__login">
                    <img
                      src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png"
                      alt=""
                    />
                    <span>Login with Facebook</span>
                  </div>
                </button>
              </div>
            </div>
            <div className="login__signup">
              New to Netflix?
              <Link to="/"> Sign up now</Link>
            </div>
            <div className="login__recaptcha">
              <p>
                <span>
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot.
                </span>
                {!recaptcha && (
                  <button onClick={setCaption} className="recaptcha-btn">
                    Learn more.
                  </button>
                )}
              </p>
              <div className={`recaptchaText ${recaptcha && "visible"}`}>
                <span>
                  The information collected by Google reCAPTCHA is subject to
                  the Google Privacy Policy and Terms of Service, and is used
                  for providing, maintaining, and improving the reCAPTCHA
                  service and for general security purposes (it is not used for
                  personalised advertising by Google).
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
