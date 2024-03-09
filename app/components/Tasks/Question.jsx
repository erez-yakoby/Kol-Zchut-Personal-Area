"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";

const Question = ({ question }) => {
  const [active, setActive] = useState(null);

  useEffect(() => {
    setActive(null);
  }, [question]);

  const handleButtonClick = (index) => {
    setActive(index === active ? null : index);
  };

  const answers = question.possibleAnswers;
  return (
    <div className="flexRow gap-30 rtl ">
      {answers.map((answer, index) => {
        return (
          <button
            key={index}
            className={`questionBtn ${index === active ? "active" : ""}`}
            onClick={() => handleButtonClick(index)}
          >
            <h4>{answer}</h4>{" "}
          </button>
        );
      })}
    </div>
  );
};

export default Question;
