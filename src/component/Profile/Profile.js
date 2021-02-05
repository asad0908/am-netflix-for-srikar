import React from "react";
import Nav from "../Nav";
import "../../css/Profile/Profile.css";
import { useSelector } from "react-redux";
import { auth } from "../../firebase";
import Plans from "./Plans";
import { useHistory } from "react-router-dom";
import ProfileOverlay from "./ProfileOverlay";
import FlipMove from "react-flip-move";

const Profile = () => {
  const user = useSelector((state) => state.User.user);
  const history = useHistory();
  const overlayThere = useSelector((state) => state.Modal.modalState);
  return (
    <div className="profileScreen">
      {overlayThere && <ProfileOverlay />}
      <Nav profile />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            onClick={() => history.push("/netflix")}
            src="https://ih0.redbubble.net/image.618369215.1083/flat,1000x1000,075,f.u2.jpg"
            alt="avatar"
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <p>
                Renewal Date:{" "}
                <span
                  style={{
                    color: "#f5f5f5",
                    fontFamily: `"Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
                "Lucida Sans", Arial, sans-serif`,
                    fontSize: "0.9rem",
                  }}
                >
                  04/03/2021
                </span>
              </p>
              <Plans
                quality="Better"
                screen="2"
                name="Netflix Standard"
                res="1080p"
              />
              <Plans
                name="Netflix Basic"
                quality="Good"
                screen="1"
                res="480p"
              />
              <Plans
                name="Netflix Premium"
                res="4K+HDR"
                quality="Best"
                screen="4"
                subscribed
              />
              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signout"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
