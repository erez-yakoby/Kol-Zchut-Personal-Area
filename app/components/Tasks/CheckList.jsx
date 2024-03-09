"use client";
import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const CheckList = ({ checkList }) => {
  const handleChange = (event) => {};


  return (
    <div>
      <FormGroup>
        {checkList.options.map((option, index) => {
          return (
            <FormControlLabel
              key={index}
              control={<Checkbox onChange={handleChange} id={option.id} />}
              label={option.text}
            />
          );
        })}
        
      </FormGroup>
    </div>
  );
};

export default CheckList;
