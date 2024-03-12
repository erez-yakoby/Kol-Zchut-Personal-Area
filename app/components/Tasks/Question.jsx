"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";

const Question = ({ task, onClick }) => {
  const [active, setActive] = useState(null);
  const question = task.taskObj;

  useEffect(() => {
    setActive(question.selectedAnswer);
  }, [question]);

  const handleButtonClick = (index) => {
    const newSelected = index === active ? null : index;
    setActive(newSelected);
    question.selectedAnswer = newSelected;
    task.isFinished = newSelected != null;
    onClick();
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
