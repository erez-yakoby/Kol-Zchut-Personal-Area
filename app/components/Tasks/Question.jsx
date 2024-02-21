"use client";
import React, { useState } from "react";
import { Button } from "@mui/material";

const Question = ({ question }) => {
  const [active, setActive] = useState(null);

  const handleButtonClick = (index) => {
    setActive(index === active ? null : index);
  };

  const answers = question.possibleAnswers;
  console.log(answers);
  return (
    <div className="flexRow gap-60 rtl ">
      {answers.map((answer, index) => {
        return (
          <button
          key={index}
          className={`questionBtn ${index === active ? "active" : ""}`}
          onClick={() => handleButtonClick(index)}
        >
            {" "}
            {answer}{" "}
          </button>
          // <Button key={index} variant="contained">
          //   {answer}
          // </Button>
        );
      })}
    </div>
  );
};

export default Question;
