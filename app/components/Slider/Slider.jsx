"use client";
import React, { useState } from "react";
import "./Slider.css";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const slides = [
  {
    title: "תכל'ס נעזור לך לקבל כל מה שמגיע לך",
    description:
      "זהו תחילת התהליך של מימוש הזכויות שלך בנושא סיום עבודה. התהליך מורכב ממספר שלבים ומשימות שנועדו לדאוג ללוות אותך שלב אחרי שלב ושבסופם  תקבל את כל מה שמגיע לך",
  },
  {
    title: "מה קרה לך בעצם?",
    description:
      "במצב של סיום עבודה יש הבדל בזכויות המגיעות למי שפוטר מעבודתו ולמי שהתפטר. בשלב זה, נרצה לקבל את הפרטים הראשוניים בנוגע לשינוי הסטטוס התעסוקתי שלך.",
  },
  {
    title: "מתי זה קרה?",
    description:
      "על מנת שנוכל להתאים את ההמלצות והשלבים המתאימים לשלב שבו אתה נמצא, נרצה להבין באיזה תאריך התרחש השינוי התעסוקתי. ",
  },
];

const Slider = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div>
      <Box className="slider">
        <div className="topPart">top</div>
        <div className="mainPart">
          <Box>
            <Stepper activeStep={activeStep} orientation="vertical">
              <Step>
                <StepLabel />
              </Step>
              <Step>
                <StepLabel />
              </Step>
              <Step>
                <StepLabel />
              </Step>
            </Stepper>
          </Box>
          <div className="slideContent">
            <h1>{slides[activeStep]?.title}</h1>
            <h4>{slides[activeStep]?.description}</h4>
          </div>
        </div>
        <Box sx={{ mb: 2, display: "flex", justifyContent: "space-between" }}>
          <Button variant="text" onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
            {activeStep === 3 - 1 ? "סיים" : "<-המשך"}
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

export default Slider;
