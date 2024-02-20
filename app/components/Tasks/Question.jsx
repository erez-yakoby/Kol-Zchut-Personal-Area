"use client";
import React from "react";
import { Button } from "@mui/material";

const Question = ({ question }) => {
  const answers = question.possibleAnswers;
  console.log(answers);
  return (
    <div className="flexRow gap-60 rtl">
      {answers.map((answer, index) => {
        return (
          <button key={index} className="questionBtn">
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

export default Question;
