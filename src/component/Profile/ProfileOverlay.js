import React, { forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../css/Profile/ProfileOverlay.css";
import { closeTheModal } from "../../redux/Modal/ModalActions";
import CheckIcon from "@material-ui/icons/Check";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const ProfileOverlay = () => {
  const dataValue = useSelector((state) => state.Modal.dataValue);
  const dispatch = useDispatch();
  return (
    <div className="profileOverlay">
      <div
        onClick={() => dispatch(closeTheModal())}
        className="profileOverlay__close"
      ></div>
      <div className="profileOverlay__card">
        <h1>{dataValue.name}</h1>
        <div className="profileOverlay__card--explaination">
          <h3>Features:</h3>
          <ul>
            <li>
              <span>Video Quality</span>
              <span>{dataValue.quality}</span>
            </li>
            <li>
              <span>Resolution</span>
              <span>{dataValue.res}</span>
            </li>
            <li>
              <span>
                Screens you can watch on <br /> at same time
              </span>
              <span>{dataValue.screen}</span>
            </li>
            <li>
              <span>Cancel anytime</span>
              <span>
                <CheckIcon />
              </span>
            </li>
          </ul>
          <div className="profileOverlay__cardPurchase">
            <div className="profileOverlay__purchasePrice">
              <span>&#8377;</span>
              700
            </div>
            <div
              className={`profileOverlay__purchaseButton ${
                dataValue.subscribed ? "profileOverlay__purchasedButton" : ""
              }`}
            >
              <button>
                {dataValue.subscribed ? "Current Package" : "Subscribe"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileOverlay;
