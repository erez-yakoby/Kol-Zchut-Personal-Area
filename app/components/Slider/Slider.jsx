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

  useEffect(() => {
    setActiveStep(0);
  }, [tabContent]);
  const renderBottomBar = () => {
    return (
      <div className="bottomBar flexrow rtl gap-400 ">
        <svg
          width="484"
          height="19"
          viewBox="0 0 484 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.96834 12.85V9.43L1.77334 7.675H2.91334L3.12334 9.43V11.665L3.10834 12.61L1.96834 12.85ZM12.4628 11.545C12.5378 15.01 10.8278 16.69 7.78283 16.03L7.90283 15.115C10.3778 15.67 11.4278 14.365 11.3528 11.545C11.3078 9.25 10.3928 8.53 9.20783 8.53C8.05283 8.53 7.45283 9.31 7.22783 10.21L6.16283 16H5.00783L6.11783 10.165L4.96283 7.675H6.16283L6.91283 9.475C7.33283 8.155 8.32283 7.585 9.37283 7.585C11.0828 7.585 12.4028 8.605 12.4628 11.545ZM14.4049 16V9.43L14.2099 7.675H15.3499L15.5599 9.43V16H14.4049ZM24.4644 16H23.2044L19.7994 10.885L18.1944 16H17.0844L18.7194 10.84L19.1244 9.85L17.7444 7.675H18.9294L20.2644 9.775L21.6744 11.86L22.0194 10.615L22.9194 7.675H24.0444L22.3494 12.88L24.4644 16ZM26.6929 7.675H31.4329V8.65L28.5379 16H27.3829L30.2779 8.59H25.6279V5.245H26.6929V7.675ZM38.1617 16V10.42C38.1617 9.055 37.5167 8.59 36.5417 8.59H33.0317V7.675H36.7967C38.2967 7.675 39.3167 8.425 39.3167 10.465V16H38.1617ZM33.0167 16V11.95L33.1817 10.945H34.1717V16H33.0167ZM45.0181 7.675H49.7581V8.65L46.8631 16H45.7081L48.6031 8.59H43.9531V5.245H45.0181V7.675ZM52.1819 16.15L51.1769 7.675H52.3319L53.2019 15.085C55.2719 14.875 57.0569 13.84 56.9519 11.02V10.645C56.9519 9.445 56.3519 8.605 55.0319 8.515L54.2819 8.47L54.3569 7.54L55.1969 7.6C56.8919 7.705 58.0169 8.605 58.0769 10.495L58.0919 10.915C58.2269 14.575 55.5719 15.985 52.1819 16.15ZM59.9029 12.85V9.43L59.7079 7.675H60.8479L61.0579 9.43V11.665L61.0429 12.61L59.9029 12.85ZM66.9774 16H65.8674L65.4924 13.96C64.9074 15.07 64.0674 15.79 62.8974 16.21L62.4774 15.28C63.7824 14.815 64.7124 14.08 65.2974 12.835V10.075C65.2974 9.13 65.1324 8.68 64.3974 8.56L63.4374 8.41L63.6024 7.51L64.8624 7.705C66.0474 7.885 66.4524 8.605 66.4524 9.985V12.88L66.9774 16ZM68.8385 12.85V9.43L68.6435 7.675H69.7835L69.9935 9.43V11.665L69.9785 12.61L68.8385 12.85ZM75.6129 16V10.345C75.6129 9.595 75.7479 8.995 76.0179 8.59H71.8179V7.675H78.2379V8.59H77.1279C76.8279 9.1 76.7679 9.805 76.7679 10.345V16H75.6129ZM85.1099 16V10.42C85.1099 9.055 84.4649 8.59 83.4899 8.59H79.9799V7.675H83.7449C85.2449 7.675 86.2649 8.425 86.2649 10.465V16H85.1099ZM79.9649 16V11.95L80.1299 10.945H81.1199V16H79.9649ZM95.6113 19V10.42C95.6113 9.055 94.9663 8.59 93.9913 8.59H91.0813V7.675H94.2463C95.7463 7.675 96.7663 8.425 96.7663 10.465V19H95.6113ZM102.69 16V10.42C102.69 9.055 102.045 8.59 101.07 8.59H98.4153V7.675H101.325C102.825 7.675 103.845 8.425 103.845 10.465V16H102.69ZM110.92 7.675H112.06C112.06 13.105 111.835 15.175 107.965 15.94L105.445 16.435L105.28 15.505L107.935 14.995L106 7.675H107.155L108.985 14.695C110.89 13.915 110.905 12.055 110.92 7.675ZM121.169 11.545C121.244 15.01 119.534 16.69 116.489 16.03L116.609 15.115C119.084 15.67 120.134 14.365 120.059 11.545C120.014 9.25 119.099 8.53 117.914 8.53C116.759 8.53 116.159 9.31 115.934 10.21L114.869 16H113.714L114.824 10.165L113.669 7.675H114.869L115.619 9.475C116.039 8.155 117.029 7.585 118.079 7.585C119.789 7.585 121.109 8.605 121.169 11.545ZM123.111 16V9.43L122.916 7.675H124.056L124.266 9.43V16H123.111ZM133.458 7.675C134.958 7.675 135.978 8.425 135.978 10.465V16H134.823H129.708H129.423V7.675H130.578H133.458ZM130.578 15.085H134.823V10.42C134.823 9.055 134.178 8.59 133.203 8.59H130.578V15.085ZM138.17 12.85V9.43L137.975 7.675H139.115L139.325 9.43V11.665L139.31 12.61L138.17 12.85ZM142.094 16.15L141.089 7.675H142.244L143.114 15.085C145.184 14.875 146.969 13.84 146.864 11.02V10.645C146.864 9.445 146.264 8.605 144.944 8.515L144.194 8.47L144.269 7.54L145.109 7.6C146.804 7.705 147.929 8.605 147.989 10.495L148.004 10.915C148.139 14.575 145.484 15.985 142.094 16.15ZM149.785 16V15.085H152.245C153.67 15.085 154.81 14.41 154.81 12.28V11.365C154.81 9.565 154.12 8.59 152.695 8.59H151.12L150.73 10.255C150.475 11.41 150.685 11.98 151.84 12.205L151.6 13C149.83 12.82 149.38 11.815 149.695 10.165L150.265 7.675H152.89C154.81 7.675 155.95 8.965 155.965 11.395V12.235C155.965 14.995 154.375 16 152.44 16H149.785ZM165.4 9.82C165.43 14.08 163.135 16.12 158.545 16.15L157.495 7.675H158.605L159.115 11.92C160.435 11.23 160.87 10.45 160.915 8.59L160.93 7.705H162.04L162.025 8.575C161.98 10.765 161.245 11.935 159.22 12.82L159.505 15.13C162.625 14.935 164.275 13.315 164.245 9.865L164.23 7.675H165.385L165.4 9.82ZM174.518 11.545C174.593 15.01 172.883 16.69 169.838 16.03L169.958 15.115C172.433 15.67 173.483 14.365 173.408 11.545C173.363 9.25 172.448 8.53 171.263 8.53C170.108 8.53 169.508 9.31 169.283 10.21L168.218 16H167.063L168.173 10.165L167.018 7.675H168.218L168.968 9.475C169.388 8.155 170.378 7.585 171.428 7.585C173.138 7.585 174.458 8.605 174.518 11.545ZM181.336 16V10.42C181.336 9.055 180.691 8.59 179.716 8.59H176.206V7.675H179.971C181.471 7.675 182.491 8.425 182.491 10.465V16H181.336ZM176.191 16V11.95L176.356 10.945H177.346V16H176.191ZM191.072 16V10.345C191.072 9.595 191.207 8.995 191.477 8.59H187.277V7.675H193.697V8.59H192.587C192.287 9.1 192.227 9.805 192.227 10.345V16H191.072ZM199.414 16V10.42C199.414 9.055 198.769 8.59 197.794 8.59H195.139V7.675H198.049C199.549 7.675 200.569 8.425 200.569 10.465V16H199.414ZM210.254 9.82C210.284 14.08 207.989 16.12 203.399 16.15L202.349 7.675H203.459L203.969 11.92C205.289 11.23 205.724 10.45 205.769 8.59L205.784 7.705H206.894L206.879 8.575C206.834 10.765 206.099 11.935 204.074 12.82L204.359 15.13C207.479 14.935 209.129 13.315 209.099 9.865L209.084 7.675H210.239L210.254 9.82ZM219.372 11.545C219.447 15.01 217.737 16.69 214.692 16.03L214.812 15.115C217.287 15.67 218.337 14.365 218.262 11.545C218.217 9.25 217.302 8.53 216.117 8.53C214.962 8.53 214.362 9.31 214.137 10.21L213.072 16H211.917L213.027 10.165L211.872 7.675H213.072L213.822 9.475C214.242 8.155 215.232 7.585 216.282 7.585C217.992 7.585 219.312 8.605 219.372 11.545ZM229.177 7.675H230.317C230.317 13.105 230.092 15.175 226.222 15.94L223.702 16.435L223.537 15.505L226.192 14.995L224.257 7.675H225.412L227.242 14.695C229.147 13.915 229.162 12.055 229.177 7.675ZM232.286 16V9.43L232.091 7.675H233.231L233.441 9.43V16H232.286ZM235.64 12.85V9.43L235.445 7.675H236.585L236.795 9.43V11.665L236.78 12.61L235.64 12.85ZM245.52 11.185C245.64 14.845 242.91 16 239.58 16.15L238.665 8.59L238.56 7.675H242.655C244.455 7.675 245.445 8.89 245.505 10.72L245.52 11.185ZM240.6 15.085C242.655 14.89 244.485 14.095 244.365 11.155V10.795C244.365 9.55 243.75 8.59 242.565 8.59H239.82L240.6 15.085ZM252.546 15.085H253.611V16H251.391H247.071V15.085H251.391V10.42C251.391 9.055 250.746 8.59 249.771 8.59H247.071V7.675H250.026C251.526 7.675 252.546 8.425 252.546 10.465V15.085Z"
            fill="#3A3838"
          />
          <path d="M263 0V16" stroke="#3A3838" />
          <path
            d="M281.396 11.545C281.471 15.01 279.761 16.69 276.716 16.03L276.836 15.115C279.311 15.67 280.361 14.365 280.286 11.545C280.241 9.25 279.326 8.53 278.141 8.53C276.986 8.53 276.386 9.31 276.161 10.21L275.096 16H273.941L275.051 10.165L273.896 7.675H275.096L275.846 9.475C276.266 8.155 277.256 7.585 278.306 7.585C280.016 7.585 281.336 8.605 281.396 11.545ZM283.533 8.47L282.918 8.185L284.223 5.605L285.003 6.01L283.533 8.47ZM285.738 8.47L285.123 8.185L286.413 5.605L287.208 6.01L285.738 8.47ZM294.013 7.675H295.153C295.153 13.105 294.928 15.175 291.058 15.94L288.538 16.435L288.373 15.505L291.028 14.995L289.093 7.675H290.248L292.078 14.695C293.983 13.915 293.998 12.055 294.013 7.675ZM302.192 15.085H303.257V16H301.037H296.717V15.085H301.037V10.42C301.037 9.055 300.392 8.59 299.417 8.59H296.717V7.675H299.672C301.172 7.675 302.192 8.425 302.192 10.465V15.085ZM307.301 16.21L307.181 15.385C308.396 15.28 308.741 14.695 308.741 13.585V7.675H312.416C313.916 7.675 314.936 8.425 314.936 10.465V16H313.781V10.42C313.781 9.055 313.136 8.59 312.161 8.59H309.896V13.465C309.896 15.235 309.116 16.045 307.301 16.21ZM317.103 16V9.43L316.908 7.675H318.048L318.258 9.43V16H317.103ZM319.962 16V15.085H321.942C323.577 15.085 324.387 14.11 324.387 12.31V11.365C324.387 9.565 323.577 8.59 321.942 8.59H319.962V7.675H322.167C324.312 7.675 325.542 8.965 325.542 11.41V12.265C325.542 14.695 324.312 16 322.167 16H319.962ZM328.253 16V10.345C328.253 9.595 328.403 8.995 328.673 8.59H327.173V7.675H330.938V8.59H329.753C329.453 9.1 329.408 9.805 329.408 10.345V16H328.253ZM336.481 7.675H341.221V8.65L338.326 16H337.171L340.066 8.59H335.416V5.245H336.481V7.675ZM342.579 16V15.085H344.559C346.194 15.085 347.004 14.11 347.004 12.31V11.365C347.004 9.565 346.194 8.59 344.559 8.59H342.579V7.675H344.784C346.929 7.675 348.159 8.965 348.159 11.41V12.265C348.159 14.695 346.929 16 344.784 16H342.579ZM353.138 12.85V9.43L352.943 7.675H354.083L354.293 9.43V11.665L354.278 12.61L353.138 12.85ZM356.687 8.47L356.072 8.185L357.377 5.605L358.157 6.01L356.687 8.47ZM358.892 8.47L358.277 8.185L359.567 5.605L360.362 6.01L358.892 8.47ZM367.168 7.675H368.308C368.308 13.105 368.083 15.175 364.213 15.94L361.693 16.435L361.528 15.505L364.183 14.995L362.248 7.675H363.403L365.233 14.695C367.138 13.915 367.153 12.055 367.168 7.675ZM373.819 7.675H378.559V8.65L375.664 16H374.509L377.404 8.59H372.754V5.245H373.819V7.675ZM385.273 7.675H386.413C386.413 13.105 386.188 15.175 382.318 15.94L379.798 16.435L379.633 15.505L382.288 14.995L380.353 7.675H381.508L383.338 14.695C385.243 13.915 385.258 12.055 385.273 7.675ZM388.352 16V15.085H390.812C392.237 15.085 393.377 14.41 393.377 12.28V11.365C393.377 9.565 392.687 8.59 391.262 8.59H389.687L389.297 10.255C389.042 11.41 389.252 11.98 390.407 12.205L390.167 13C388.397 12.82 387.947 11.815 388.262 10.165L388.832 7.675H391.457C393.377 7.675 394.517 8.965 394.532 11.395V12.235C394.532 14.995 392.942 16 391.007 16H388.352ZM396.497 16V9.43L396.302 7.675H397.442L397.652 9.43V16H396.497ZM406.992 11.545C407.067 15.01 405.357 16.69 402.312 16.03L402.432 15.115C404.907 15.67 405.957 14.365 405.882 11.545C405.837 9.25 404.922 8.53 403.737 8.53C402.582 8.53 401.982 9.31 401.757 10.21L400.692 16H399.537L400.647 10.165L399.492 7.675H400.692L401.442 9.475C401.862 8.155 402.852 7.585 403.902 7.585C405.612 7.585 406.932 8.605 406.992 11.545ZM412.612 8.635L411.517 8.155L412.837 5.455L414.217 6.085L412.612 8.635ZM415.222 8.635L414.142 8.155L415.447 5.455L416.827 6.085L415.222 8.635ZM418.508 12.85V9.19L418.328 7.435H420.488L420.668 9.19V11.53L420.653 12.475L418.508 12.85ZM421.661 16.255L421.481 14.785C422.636 14.665 422.831 14.275 422.816 13.27V7.435H427.361C428.861 7.435 429.941 8.215 429.941 10.255V16H427.781V10.15C427.781 9.37 427.406 9.055 426.761 9.055H424.991V12.985C424.991 15.295 423.956 16.045 421.661 16.255ZM431.647 16V9.19L431.467 7.435H433.627L433.807 9.19V16H431.647ZM435.049 16V14.38H437.449C438.664 14.38 439.144 13.48 439.144 12.28V11.155C439.144 9.955 438.664 9.055 437.449 9.055H435.049V7.435H438.034C440.209 7.435 441.319 8.95 441.319 11.275V12.16C441.319 14.485 440.209 16 438.034 16H435.049ZM443.41 16V10.81C443.41 10.03 443.575 9.415 443.83 9.055H442.48V7.435H446.935V9.055H445.81C445.57 9.565 445.57 10.27 445.57 10.81V16H443.41ZM449.365 8.635L448.27 8.155L449.59 5.455L450.97 6.085L449.365 8.635ZM451.975 8.635L450.895 8.155L452.2 5.455L453.58 6.085L451.975 8.635ZM462.239 16V10.42C462.239 9.055 461.594 8.59 460.619 8.59H457.964V7.675H460.874C462.374 7.675 463.394 8.425 463.394 10.465V16H462.239ZM464.888 16.21L464.768 15.385C465.983 15.28 466.328 14.695 466.328 13.585V7.675H470.003C471.503 7.675 472.523 8.425 472.523 10.465V16H471.368V10.42C471.368 9.055 470.723 8.59 469.748 8.59H467.483V13.465C467.483 15.235 466.703 16.045 464.888 16.21ZM481.396 16H480.136L476.731 10.885L475.126 16H474.016L475.651 10.84L476.056 9.85L474.676 7.675H475.861L477.196 9.775L478.606 11.86L478.951 10.615L479.851 7.675H480.976L479.281 12.88L481.396 16Z"
            fill="#3A3838"
          />
        </svg>
        <div className="logo-container">
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
        </div>
      </div>
    );
  };

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
              return (
                <SingleSelection
                  selectionObj={task.taskObj}
                  fullWidth={slide.tasks.length == 1}
                />
              );
            case TaskType.TextFiller:
              return <TextFiller task={task.taskObj} />;
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
        <Heading text={tabContent.name} level={6} />
      </div>
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
    const animationData = getArrowAnimationForFinishingSlideContent(
      tabContent.finishingSlide.arrowAnimationType
    );
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
        <LottieAnimation animationData={animationData} />
      </div>
    );
  };

  const getNextButtonText = () => {
    console.log(activeStep, slides.length);
    if (activeStep === slides.length - 1) {
      return "סיים";
    } else if (activeStep === slides.length) {
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
    const buttonClassName =
      activeStep === slides.length
        ? "nextSlideButtonFinishingSlide"
        : "nextSlideButton";
    const buttonTextClassName =
      activeStep === slides.length
        ? "finishingSlideNextButtonText"
        : "nextbutton";
    return (
      <button className={buttonClassName} onClick={handleNextButtonClicked}>
        {renderNextButtonIcon()}
        <Heading
          text={nextButtonText}
          level={4}
          className={buttonTextClassName}
        />
      </button>
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
      <div className="flexRow rtl">
        {renderActiveSlideContent()}
        {renderSideArrowComponent()}
      </div>
    );
  };

  const renderFinishingSlide = () => {
    return (
      <div className="flexCol rtl">
        {renderFinishingSlideContent()}
        {renderNextButton()}
      </div>
    );
  };
  const renderSliderBody = () => {
    return (
      <div className="sliderBody">
        {activeStep === slides.length
          ? renderFinishingSlide()
          : renderActiveSlide()}
      </div>
    );
  };

  const sliderClassName =
    activeStep === slides.length
      ? "slider flexCol finishingSlide"
      : "slider flexCol";

  return (
    <div className={sliderClassName}>
      {renderSliderHeader()}
      {renderSliderBody()}
      {renderBottomBar()}
    </div>
  );
};

export default Slider;
