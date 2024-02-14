"use client";
import React, { useState, useEffect } from "react";
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
import CheckList from "../Tasks/CheckList";
import { TaskType } from "@/app/data/content";
import Questionnaire from "../Button/Button";


const Slider = ({ tabContent, closeTabHandler, nextTabHandler }) => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    setActiveStep(0);
  }, [tabContent]);

  const slides = tabContent.slides;

  const handleNext = () => {
    if (activeStep + 1 >= slides.length) {
      nextTabHandler();
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
        <div className="slideContent flexCol ">
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
  if (!slide) return;
  switch (slide.taskType) {
    case TaskType.NoTask:
      break;
    case TaskType.Question:
      return <Question question={slide.task} />;
    case TaskType.CheckList:
      return <CheckList checkList={slide.task} />;
    case TaskType.DateChoice:
      return <DateChooser />;
    default:
      break;
  }
};

export default Slider;
