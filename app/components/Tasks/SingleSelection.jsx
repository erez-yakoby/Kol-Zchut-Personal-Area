import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";


export default function SingleSelection({ selectionObj }) {
  const [value, setValue] = React.useState(null);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel>{selectionObj.text}</FormLabel>
      <RadioGroup row value={value} onChange={handleChange} >
        {selectionObj.options.map((option, index) => {
          return (
            <FormControlLabel
              key={index}
              value={option.text}
              control={<Radio
              className="singleselection"
              sx={{
                color: "#000000",
                '&.Mui-checked': {
                  color: "#a26af4",
                },
              }}
              />}
              label={option.text}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
}
