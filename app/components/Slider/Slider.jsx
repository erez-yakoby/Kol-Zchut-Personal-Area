"use client";
import React, { useState } from "react";
import "./Slider.css";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";

const Slider = ({ tabContent }) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const slides = tabContent.slides;

  return (
    <div>
      <Box className="slider">
        <div className="topPart">top</div>
        <div className="mainPart">
          <Box>
            <Stepper activeStep={activeStep} orientation="vertical">
              {slides.map((slide, index) => {
                return (
                  <Step key={index}>
                    <StepLabel />
                  </Step>
                );
              })}
            </Stepper>
          </Box>
          <div className="slideContent">
            <h1>{slides[activeStep]?.title}</h1>
            <h4>{slides[activeStep]?.description}</h4>
          </div>
        </div>
        {renderTask(slides[activeStep])}
        <Box sx={{ mb: 2, display: "flex", justifyContent: "space-between" }}>
          <Button variant="text" onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
            {activeStep === slides.length - 1 ? "סיים" : "<-המשך"}
          </Button>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            variant="text"
            sx={{ mt: 1, mr: 1 }}
          >
            חזור
          </Button>
        </Box>
      </Box>
    </div>
  );
};

const renderTask = (slide) => {
  switch (slide.taskType) {
    case "none":
      break;
    case "question":
      return <Box>question</Box>;
    case "multiSelection":
      return <Box>multiSelection</Box>;
    case "chooseDate":
      return <Box>chooseDate</Box>;
    default:
      break;
  }
};

export default Slider;
