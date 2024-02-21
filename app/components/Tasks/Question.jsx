"use client";
import React from "react";

const Question = ({ question }) => {
  const answers = question.possibleAnswers;
  console.log(answers);
  return (
    <div className="flexRow gap-30 rtl">
      {answers.map((answer, index) => {
        return (
          <button key={index} className="questionBtn">
            {answer}
          </button>
        );
      })}
    </div>
  );
};

export default Question;
