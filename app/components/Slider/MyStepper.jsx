import React from "react";
import Image from "next/image";
import { IconButton } from "@mui/material";
import EastIcon from "@mui/icons-material/East";

const MyStepper = ({ slides, activeStep, handleBack }) => {
  return (
    <div className="slidesStepper">
      {activeStep !== 0 && (
        <IconButton onClick={handleBack} size="medium" sx={{ color: "black" }} disableRipple>
          <EastIcon fontSize="inherit" />
        </IconButton>
      )}
      {slides.map((slide, index) => {
        return (
          <Image
            key={index}
            src={
              activeStep === index
                ? "/sliderIcons/stepperEllipseFull.svg"
                : "/sliderIcons/stepperEllipse.svg"
            }
            alt={"ellipse" + index}
            height={15}
            width={15}
          />
        );
      })}
    </div>
  );
};

export default MyStepper;
