import React, { useState, useEffect } from "react";
import WestIcon from "@mui/icons-material/West";
import DateChooser from "../Tasks/DateChooser";
import Question from "../Tasks/Question";
import SingleSelection from "../Tasks/SingleSelection";
import CheckAccordion from "../Tasks/CheckAccordion";
import TextFiller from "../Tasks/TextFiller";
import { TaskType } from "@/app/data/content";
import Image from "next/image";
import MyStepper from "./MyStepper";
import BottomBar from "./BottomBar";
import ExpandingButton from "../ExpandingButton/ExpandingButton";
import PopUpBanner from "../PopUpBanner/PopUpBanner";
import { LoopArrow, Arrow1, LittleArrowText, ArrowID } from "../arrow";
import Heading from "@/app/components/Heading/Heading";
import LottieAnimation from "@/app/components/Animation/LottieAnimation";
import arrowAnimations from "@/public/animations";
import { Check } from "@mui/icons-material";
const SideArrowTypes = {
  LoopArrow: "LoopArrow",
  Arrow1: "Arrow1",
  LittleArrowText: "LittleArrowText",
  ArrowID: "ArrowID",
};

const arrowAnimationsTypes = {
  arrow1: "arrow1",
  arrow2: "arrow2",
  arrow3: "arrow3",
  arrow4: "arrow4",
  arrow5: "arrow5",
};
const Slider = ({ tabContent, nextTabHandler }) => {
  const slides = tabContent.slides;
  const [activeStep, setActiveStep] = useState(0);
  const [isNextDisabled, setIsNextDisabled] = useState(true);
  const [shouldDisplayLeavePopUp, setShouldDisplayLeavePopUp] = useState(false);

  useEffect(() => {
    setActiveStep(0);
  }, [tabContent]);

  useEffect(() => {
    handleTaskProgress();
  }, [activeStep]);

  const handleNextButtonClicked = () => {
    if (
      activeStep === slides.length ||
      (activeStep === slides.length - 1 && !tabContent.finishingSlide)
    ) {
      nextTabHandler();
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBackButtonClicked = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const renderSideArrowComponent = () => {
    if (activeStep === slides.length) {
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
  };

  const handleTaskProgress = () => {
    let isNextDisabled = false;
    slides[activeStep]?.tasks?.forEach((task) => {
      switch (task.taskType) {
        case TaskType.CheckList:
          break;
        case TaskType.TextFiller:
          break;
        default:
          if (!task.isFinished) {
            isNextDisabled = true;
          }
          break;
      }
    });
    setIsNextDisabled(isNextDisabled);
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
              return (
                <Question
                  key={index}
                  task={task}
                  onClick={handleTaskProgress}
                />
              );
            case TaskType.CheckList:
              return <CheckAccordion key={index} checkList={task.taskObj} />;
            case TaskType.DateChoice:
              return (
                <DateChooser
                  key={index}
                  task={task}
                  onSelect={handleTaskProgress}
                />
              );
            case TaskType.SingleSelection:
              return (
                <SingleSelection
                  key={index}
                  task={task}
                  fullWidth={slide.tasks.length == 1}
                  onSelect={handleTaskProgress}
                />
              );
            case TaskType.TextFiller:
              return <TextFiller key={index} task={task.taskObj} />;
            default:
              break;
          }
        })}
      </div>
    );
  };

  const renderSliderHeader = () => {
    return (
      <>
        {tabContent.id == 0 ? (
          <div className="flexRow sliderTopFirstTab">
            <h6>זכותך</h6>
            <h3 className="notbold">{tabContent.name}</h3>
          </div>
        ) : (
          <div className="flexRow rtl sliderTop">
            {tabContent.iconPath !== "" && (
              <Image
                src={tabContent.iconPath}
                alt={tabContent.name}
                width={18}
                height={18}
              />
            )}
            <Heading text={tabContent.name} level={6} />
          </div>
        )}
      </>
    );
  };

  const renderActiveSlideContent = () => {
    return (
      <div className="slideContent flexCol">
        {renderActiveSlideInformation()}
        {renderTasks(slides[activeStep])}
        {renderNextButton()}
      </div>
    );
  };

  const getArrowAnimationForFinishingSlideContent = (arrowAnimationType) => {
    switch (arrowAnimationType) {
      case arrowAnimationsTypes.arrow1:
        return arrowAnimations.arrow1;
      case arrowAnimationsTypes.arrow2:
        return arrowAnimations.arrow2;
      case arrowAnimationsTypes.arrow3:
        return arrowAnimations.arrow3;
      case arrowAnimationsTypes.arrow4:
        return arrowAnimations.arrow4;
      case arrowAnimationsTypes.arrow5:
        return arrowAnimations.arrow5;
    }
  };

  const renderFinishingSlideContent = () => {
    const animationClassName =
      tabContent.finishingSlide.arrowAnimationType === "arrow1"
        ? "animationArrowWrapper1"
        : "animationArrowWrapper2";
    const animationData = getArrowAnimationForFinishingSlideContent(
      tabContent.finishingSlide.arrowAnimationType
    );

    const animationHeight =
      tabContent.finishingSlide.arrowAnimationType === "arrow4" ||
      tabContent.finishingSlide.arrowAnimationType === "arrow5"
        ? "1000px"
        : null;
    const animationWidth =
      tabContent.finishingSlide.arrowAnimationType === "arrow4" ||
      tabContent.finishingSlide.arrowAnimationType === "arrow5"
        ? "1000px"
        : null;

    return (
      <div className="slideContent flexCol">
        <MyStepper
          slides={slides}
          activeStep={activeStep}
          handleBack={handleBackButtonClicked}
        />
        <Heading
          text={tabContent.finishingSlide.title}
          level={2}
          className={"finishingSlideTitle"}
        />
        <LottieAnimation
          animationData={animationData}
          className={animationClassName}
          height={animationHeight}
          width={animationWidth}
        />
      </div>
    );
  };

  const getNextButtonText = () => {
    console.log(activeStep, slides.length);
    if (activeStep === slides.length - 1) {
      return "סיים";
    } else if (activeStep === slides.length) {
      if (tabContent.id == 5) {
        return "חזור לדף הבית";
      }
      return "נמשיך לשלב הבא?";
    } else {
      return "הבא";
    }
  };

  const renderNextButtonIcon = () => {
    if (activeStep === slides.length) {
      return <WestIcon htmlColor={"#f6efe5"} className="nextSlideWestIcon" />;
    } else if (activeStep === slides.length - 1) {
      return <Check className={"nextSlideCheckIcon"} />;
    } else {
      return <WestIcon className="nextSlideWestIcon" />;
    }
  };
  const renderNextButton = () => {
    const nextButtonText = getNextButtonText();
    let buttonClassName =
      activeStep === slides.length
        ? "nextSlideButtonFinishingSlide"
        : "nextSlideButton ";
    if (isNextDisabled) buttonClassName += " disabledButton";
    const buttonTextClassName =
      activeStep === slides.length
        ? "finishingSlideNextButtonText"
        : "nextbutton";
    return (
      <div>
        <button className={buttonClassName} onClick={handleNextButtonClicked}>
          {renderNextButtonIcon()}
          <Heading
            text={nextButtonText}
            level={4}
            className={buttonTextClassName}
          />
        </button>
      </div>
    );
  };

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
        <Heading text={title} level={1} />
        {description && (
          <Heading text={description} level={4} className="prewrap" />
        )}
      </>
    );
  };
  const renderActiveSlide = () => {
    return (
      <div className="flexRow rtl ">
        {renderActiveSlideContent()}
        {renderSideArrowComponent()}
      </div>
    );
  };

  const renderFinishingSlide = () => {
    return (
      <div className="flexRow rtl">
        {renderFinishingSlideContent()}
        <div className="sticky-bottom-left">{renderNextButton()}</div>
      </div>
    );
  };

  const RenderLeavePopUp = () => {
    return (
      <div className="leavePopWrapperDiv">
        <PopUpBanner
          buttonText={"העתק לינק"}
          subHeadingText={
            "על מנת לאפשר לך לצאת מהאתר ולחזור בדיוק לנקודה\nשבה עצרת, שמור את הלינק במקום נגיש ובכל רגע נתון\nתוכל לחזור ולהמשיך בתהליך."
          }
          headingText={"רוצה להיות מסוגל להמשיך מאיפה שהפסקת?"}
          onClose={() => setShouldDisplayLeavePopUp(false)}
          className={"leavePopUpBanner"}
        />
      </div>
    );
  };
  const renderSliderBody = () => {
    return (
      <div className="sliderBody">
        {shouldDisplayLeavePopUp ? (
          RenderLeavePopUp()
        ) : (
          <>
            {activeStep === slides.length
              ? renderFinishingSlide()
              : renderActiveSlide()}
          </>
        )}
      </div>
    );
  };

  const sliderClassName = shouldDisplayLeavePopUp
    ? "slider flexCol"
    : activeStep === slides.length
    ? "slider flexCol finishingSlide"
    : "slider flexCol";

  return (
    <div className={sliderClassName}>
      {renderSliderHeader()}
      {renderSliderBody()}
      <ExpandingButton
        text={"צא ושמור"}
        iconType={"close"}
        className={"leaveAndSaveBtn"}
        textClassName={"leaveAndSaveBtnText"}
        onClick={() => setShouldDisplayLeavePopUp(true)}
      />
      <BottomBar />
    </div>
  );
};

export default Slider;
