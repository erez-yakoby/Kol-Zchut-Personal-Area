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
import SingleSelection from "../Tasks/SingleSelection";
import { TaskType } from "@/app/data/content";
import Questionnaire from "../Button/Button";
import Image from "next/image";
import MyStepper from "./MyStepper";

const Slider = ({ tabContent, nextTabHandler }) => {
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
    <div className="slider flexCol ">
      <div className="flexRow rtl sliderTop">
        <Image
          src={tabContent.iconPath}
          alt={tabContent.name}
          width={18}
          height={18}
        />
        <Typography className="tabname"> {tabContent.name} </Typography>
      </div>

      <div className="flexRow rtl height70  ">
        {/* <div className="selfCenter">
          <Stepper activeStep={activeStep} orientation="vertical">
            {slides.map((slide, index) => {
              return (
                <Step key={index}>
                  <StepLabel />
                </Step>
              );
            })}
          </Stepper>
        </div> */}
        <div className="slideContent flexCol ">
          <MyStepper slides={slides} activeStep={activeStep} />
          <h1>{slides[activeStep]?.title}</h1>
          <h4>{slides[activeStep]?.description}</h4>
          {renderTasks(slides[activeStep])}
          <button className="nextSlideButton" onClick={handleNext}>
            {" "}
            <WestIcon />
            <h4>{activeStep === slides.length - 1 ? "סיים" : "הבא"}</h4>
          </button>
        </div>
      </div>

      {/* <div className="flexRow spaceBet ">
        <Button
          variant="text"
          endIcon={<EastIcon />}
          disabled={activeStep === 0}
          onClick={handleBack}
        >
          חזור
        </Button>
        <Button variant="text" endIcon={<WestIcon />} onClick={handleNext}>
          {activeStep === slides.length - 1 ? "סיים" : "המשך"}
        </Button>
      </div> */}
      {/* <div className="creditsBar  ">
        <h4>אתר ״זכותי״ מופעל ע״י כל זכות בע״מ</h4>
        <h4> האתר פונה לנשים וגברים כאחד</h4>
        <h4>בסיוע משרד המשפטים ומערך הדיגיטל הלאומי </h4>
        <Image
          src="/logos/kolZchoot.svg"
          alt="/logos/kolZchoot"
          width={58}
          height={19}
        />
        <Image
          src="/logos/digital.svg"
          alt="/logos/digital"
          width={63}
          height={22}
        />
        <Image
          src="/logos/ministryOfJustice.svg"
          alt="/logos/ministryOfJustice"
          width={71}
          height={17}
        />
      </div> */}
    </div>
  );
};

const renderTasks = (slide) => {
  if (!slide || !slide.tasks) return;
  return (
    <div className="tasksSection">
      {slide.tasks.map((task, index) => {
        switch (task.taskType) {
          case TaskType.NoTask:
            break;
          case TaskType.Question:
            return <Question question={task.taskObj} />;
          case TaskType.CheckList:
            return <CheckList checkList={task.taskObj} />;
          case TaskType.DateChoice:
            return <DateChooser task={task} />;
          case TaskType.SingleSelection:
            return <SingleSelection selectionObj={task.taskObj} />;
          default:
            break;
        }
      })}
    </div>
  );
};

export default Slider;
