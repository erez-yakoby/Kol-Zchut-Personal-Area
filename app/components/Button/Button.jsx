// To use the button components - add the texts to the Buttons const and use the ButtonWrapper in the page.jsx

"use client";
import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useButtonContext } from "./ButtonContext";
import { Style } from "@mui/icons-material";

const Buttons = [
    { text1: "התפטרתי", text2: "פוטרתי" }
];

const ButtonBox = () => {
    const { updateClickedButton } = useButtonContext();

    const handleButtonClick = (buttonProperty) => {
        updateClickedButton(buttonProperty);
    };

    return (
        <div>
            <Box className="buttonbox" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                <Button id="choosebutton" variant="contained" style={{ marginRight: '8px' }} onClick={() => handleButtonClick('text1')}>
                    {Buttons[0]?.text1}
                </Button>
                <Button id="choosebutton" variant="contained" onClick={() => handleButtonClick('text2')}>
                    {Buttons[0]?.text2}
                </Button>
            </Box>
        </div>
    );
};

export default ButtonBox;

