"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import DateChooser from "../Tasks/DateChooser";
import Question from "../Tasks/Question";

const Slider = ({ tabContent, closeTabHandler }) => {
  const [activeStep, setActiveStep] = useState(0);
  const slides = tabContent.slides;

  const handleNext = () => {
    if (activeStep + 1 >= slides.length) {
      // closeHandler
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box className="slider flexCol spaceBet">
      <div className="flexRow spaceBet rtl">
        <IconButton size="small" onClick={closeTabHandler}>
          <CloseRoundedIcon />
        </IconButton>
        <Typography> {tabContent.name} </Typography>
      </div>

      <div className="flexRow rtl height70  ">
        <div className="selfCenter">
          <Stepper activeStep={activeStep} orientation="vertical">
            {slides.map((slide, index) => {
              return (
                <Step key={index}>
                  <StepLabel />
                </Step>
              );
            })}
          </Stepper>
        </div>
        <div className="slideContent flexCol">
          <h1>{slides[activeStep]?.title}</h1>
          <h4>{slides[activeStep]?.description}</h4>
          {renderTask(slides[activeStep])}
        </div>
      </div>

      <div className="flexRow spaceBet">
        <Button variant="text" startIcon={<WestIcon />} onClick={handleNext}>
          {activeStep === slides.length - 1 ? "סיים" : "המשך"}
        </Button>
        <Button
          variant="text"
          endIcon={<EastIcon />}
          disabled={activeStep === 0}
          onClick={handleBack}
        >
          חזור
        </Button>
      </div>
    </Box>
  );
};

const renderTask = (slide) => {
  switch (slide.taskType) {
    case "none":
      break;
    case "question":
      return <Question question={slide.task} />;
    case "multiSelection":
      return <Box>multiSelection</Box>;
    case "chooseDate":
      return <DateChooser />;
    default:
      break;
  }
};

export default Slider;
