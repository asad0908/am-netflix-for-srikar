import React from "react";
// import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "../../css/Signup/SignupHeader.css";

const SignupHeader = () => {
  //   const user = useSelector((state) => state.User.user);
  const history = useHistory();
  const user = null;

  //   const signOutUser = () => {
  //     auth.signOut().catch((err) => alert(err.message));
  //     history.push("/login");
  //   };
  return (
    <div className="signupHeader">
      <Link to="/">
        <img
          className="signupHeader__img"
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt=""
        />
      </Link>
      {/*onClick={signOutUser}*/}
      <p className="signupHeader__link">{user ? "Sign Out" : "Sign In"}</p>
    </div>
  );
};

export default SignupHeader;
