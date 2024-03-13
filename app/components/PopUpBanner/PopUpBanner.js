
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Heading from "@/app/components/Heading/Heading";
import IconButton from '@mui/material/IconButton';
function PopUpBanner({
                         headingText,
                         subHeadingText,
                            buttonText,
                         className,
                         buttonTextClassName,
                         onClick,
                         onClose}) {
    return (
        <Box
            className={className}
        >
            <div className="popUpBannerCloseIcon">
                <IconButton
                    onClick = {onClose}>
                    <CloseIcon  />
                </IconButton>
            </div>

            <div className="popUpBannerContentContainer flexCol">
                <Heading text={headingText} level={1}/>
                <Heading text={subHeadingText} level={4}/>
                <Button
                    className={"questionBtn"}
                    onClick={onClick}
                    style={{
                        width: 'fit-content',
                        height: 'fit-content',
                    }}
                >

                    <Heading text={buttonText} level={4} />
                </Button>
            </div>

        </Box>
    );
}
export default PopUpBanner;
