import React from 'react';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Heading from "@/app/components/Heading/Heading";

function ExpandingButton({text, iconType , className, textClassName, iconClassName, onClick}) {
    const [hovered, setHovered] = React.useState(false);
    const getIcon = () => {
        //switch to determine which icon to display
        //
        let icon = null;
        //todo: use Icon class name
        switch (iconType) {
            case "close":
                icon =  <CloseIcon htmlColor={"#f6efe5"}  />;
                break;
        }

        return (icon)

    }
    return (
        <Button
            className={className}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={onClick}
            disableRipple
            style={{
                width: 'fit-content',
                height: 'fit-content',
            }}
        >
            <div style = {{display: 'flex',
                alignItems: 'center',
                transition: '0.3s',
                justifyContent: 'space-between',
                paddingLeft : '10px',
                paddingRight : '10px',
            }}>
                {hovered && getIcon()}
                <Heading text={text} level={4} className={textClassName}/>
            </div>

        </Button>
    );

}

export default ExpandingButton;
