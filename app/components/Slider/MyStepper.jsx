import React from "react";
import Image from "next/image";

const MyStepper = ({ slides, activeStep }) => {
  return (
    <div className="slidesStepper">
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
