import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Heading from "@/app/components/Heading/Heading";

export default function SingleSelection({ selectionObj, fullWidth }) {
  const [value, setValue] = React.useState(null);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl className={fullWidth || "task"}>
      <Heading level={4} text={selectionObj.text} className={"textList"} />
      <RadioGroup
        row
        value={value}
        onChange={handleChange}
        className={fullWidth && "radioGroupFullWidth"}
      >
        {selectionObj.options.map((option, index) => {
          return (
            <FormControlLabel
              key={index}
              value={option.text}
              className={fullWidth || "task"}
              sx={{ margin: 0 }}
              control={
                <Radio
                  className="singleselectionText"
                  sx={{
                    color: "#000000",
                    "&.Mui-checked": {
                      color: "#a26af4",
                    },
                  }}
                />
              }
              label={<Heading text={option.text} level={4} />}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
}
