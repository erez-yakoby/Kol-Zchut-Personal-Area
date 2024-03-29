import React from "react";
import Lottie from "react-lottie";

const LottieAnimation = (props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: props.animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={props.className}>
      <Lottie options={defaultOptions} height={props.height} width={props.width}/>
    </div>
  );
};

export default LottieAnimation;
