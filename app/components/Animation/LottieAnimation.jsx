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

    if (props.width && props.height) {
        defaultOptions.width = props.width;
        defaultOptions.height = props.height;
    }
    return (
        <div>
            <Lottie options={defaultOptions} />
        </div>
    )

}

export default LottieAnimation;
