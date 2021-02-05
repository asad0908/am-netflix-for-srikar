import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { openTheModal } from "../../redux/Modal/ModalActions";
import ProfileOverlay from "./ProfileOverlay";

const Plans = ({ name, res, subscribed, screen, quality }) => {
  const dispatch = useDispatch();

  const data = {
    name,
    res,
    screen,
    quality,
    subscribed,
  };

  return (
    <div className={`profilePlans ${subscribed ? "profilePlans__sub" : ""}`}>
      <div
        onClick={() => dispatch(openTheModal(data))}
        className="profilePlan__info"
      >
        <h5>{name}</h5>
        <p>{res}</p>
      </div>
      <button>{subscribed ? "Current Package" : "Subscribe"}</button>
    </div>
  );
};

export default Plans;
