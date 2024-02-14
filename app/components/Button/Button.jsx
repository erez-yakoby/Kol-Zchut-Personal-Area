"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useButtonContext } from "./ButtonContext";

function Questionnaire() {
  const initialQuestions = [
    { id: 1, text1: 'התפטרתי', text2: 'פוטרתי' },
    { id: 2, text1: 'sdf', text2: 'asdf' },
    { id: 3, text1: '', text2: '' },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [lastClickedButton, setLastClickedButton] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});

  const handleButtonClick = (answer) => {
    // Update userAnswers with the selected answer for the current question
    setUserAnswers({
      ...userAnswers,
      [initialQuestions[currentQuestionIndex].id]: answer === 'none' ? null : answer === 'true',
    });

    // Update lastClickedButton to the clicked button's id
    setLastClickedButton(initialQuestions[currentQuestionIndex].id);
  };

  const handleNextQuestion = () => {
    // Move to the next question and reset lastClickedButton
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setLastClickedButton(null);
  };

  return (
    <div>
      <form>
        <Box className="buttonbox">
          <Button
            type="button"
            id = "buttons"
            variant="contained"
            onClick={() => handleButtonClick('true')}
            // style={{
            //   backgroundColor:
            //     lastClickedButton === initialQuestions[currentQuestionIndex].id
            //       ? 'white' // Change the color for the last clicked button
            //       : 'black',
            // }}
          >
            {initialQuestions[currentQuestionIndex]?.text1}
          </Button>
          <Button
            id= "buttons"
            type="button"
            // style={{backgroundColor: 'black'}}
            variant="contained"
            onClick={() => handleButtonClick('false')}
            // style={{
            //   backgroundColor:
            //     lastClickedButton === initialQuestions[currentQuestionIndex].id
            //       ? 'white' // Change the color for the last clicked button
            //       : 'black',
            // }}
          >
            {initialQuestions[currentQuestionIndex]?.text2}
          </Button>
        </Box>
        {/* <Button type="button" onClick={handleNextQuestion}>    we need to implement this function (handleNextQuestion) on the המשך button
          Next Question
        </Button> */}
      </form>
    </div>
  );
}

export default Questionnaire;
