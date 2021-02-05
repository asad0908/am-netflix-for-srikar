import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import "../../css/Dashboard/FaqQuestion.css";

const FaqQuestion = ({ question, part1, part2 }) => {
  const [closed, setClosed] = useState(true);

  const toggleClosed = () => {
    setClosed(!closed);
  };

  return (
    <li className="faqQuestion__listItem">
      <button
        onClick={toggleClosed}
        className="faqQuestion__button faqQuestion__text"
      >
        <span>
          {question}
          {closed ? <AddIcon /> : <CloseIcon />}
        </span>
      </button>
      <div className={`faqQuestion__ans ${closed ? "closed" : "open"}`}>
        <span>
          {part1}
          {part2 && (
            <>
              <br />
              <br />
              {part2}
            </>
          )}
        </span>
      </div>
    </li>
  );
};

export default FaqQuestion;
