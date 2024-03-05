import React, { useState, useEffect } from "react";
import WestIcon from "@mui/icons-material/West";
import DateChooser from "../Tasks/DateChooser";
import Question from "../Tasks/Question";
import SingleSelection from "../Tasks/SingleSelection";
import CheckAccordion from "../Tasks/CheckAccordion";
import { TaskType } from "@/app/data/content";
import Image from "next/image";
import MyStepper from "./MyStepper";
import { LoopArrow, Arrow1, LittleArrowText, ArrowID } from "../arrow";
import Heading from "@/app/components/Heading/Heading";

const SideArrowTypes =
    {
        LoopArrow: "LoopArrow",
        Arrow1: "Arrow1",
        LittleArrowText: "LittleArrowText",
        ArrowID: "ArrowID",
    }
const Slider = ({ tabContent, nextTabHandler }) => {
    const slides = tabContent.slides;
    const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    setActiveStep(0);
  }, [tabContent]);


  const handleNextButtonClicked = () => {
    if (activeStep === slides.length) {
      nextTabHandler();
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBackButtonClicked = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  const renderSideArrowComponent = () => {
    if (activeStep === slides.length ) {
      return null;
    }
    const arrowType = slides[activeStep]?.photo;
    switch (arrowType) {
        case SideArrowTypes.LoopArrow:
            return <LoopArrow />;
        case SideArrowTypes.Arrow1:
            return <Arrow1 />;
        case SideArrowTypes.LittleArrowText:
            return <LittleArrowText />;
        case SideArrowTypes.ArrowID:
            return <ArrowID />;
        default:
            return null;
    }
  }

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
                return <CheckAccordion checkList={task.taskObj} />;
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


  const renderSliderHeader = () => {
    return (
        <div className="flexRow rtl sliderTop">
          {tabContent.iconPath !== "" && (
              <Image
                  src={tabContent.iconPath}
                  alt={tabContent.name}
                  width={18}
                  height={18}
              />
          )}
            <Heading text={tabContent.name} level={6}/>
        </div>
    )
  }

  const renderActiveSlideContent = () => {
    return (
        <div className="slideContent flexCol">
            {renderActiveSlideInformation()}
            {renderTasks(slides[activeStep])}
            {renderNextButton()}
        </div>
    )
  }

    const renderFinishingSlideContent = () =>
    {
        return (
            <div className="tasksSection">
                <h1>סיימת</h1>
                <h4>תודה רבה</h4>
            </div>
        );
    }

  const renderNextButton = () => {
      const nextButtonText = activeStep === slides.length - 1 ? "סיים" : "הבא";
    return (
      <button className="nextSlideButton " onClick={handleNextButtonClicked}>
        <WestIcon/>
        <Heading text={nextButtonText} level={4} className="nextbutton"/>
      </button>
  )
  }

  //todo: allow sliding within?
    //todo: prevent code duplication with the stepper for finishing and active slides - currently the position gets messed up

    const renderActiveSlideInformation = () => {
        const title = slides[activeStep]?.title;
        const description = slides[activeStep]?.description;
        return (
          <>
              <MyStepper
                  slides={slides}
                  activeStep={activeStep}
                  handleBack={handleBackButtonClicked}
              />
              <Heading text={title} level={1}/>
              <Heading text={description} level={4}/>
          </>

      )
    }
  const renderActiveSlide = () => {
      return (
          <div className="flexRow rtl">
              {renderActiveSlideContent()}
              {renderSideArrowComponent()}
          </div>
      )

  }

  const renderFinishingSlide = () => {
        return (
            <div className="flexRow rtl">
                <div className="slideContent flexCol">
                    <Heading text={tabContent.name} level={1}/>
                    {renderTasksFinishingSlide()}
                    {renderNextButton()}
                </div>
                {renderSideArrowComponent()}
            </div>
        )
  }
  const renderSliderBody = () => {
    return (
        <div className="sliderBody">
          {activeStep === slides.length ? renderFinishingSlide() : renderActiveSlide()}
        </div>
    )
  }

  return (
    <div className="slider flexCol">
      {renderSliderHeader()}
      {renderSliderBody()}
    </div>
  );
};



export default Slider;
