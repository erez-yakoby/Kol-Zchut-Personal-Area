import { useEffect, useState } from "react";
import { Collapse, List, ListItem, ListItemIcon } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Image from "next/image";
import Heading from "@/app/components/Heading/Heading";

export default function CheckAccordion({ checkList }) {
  const [expanded, setExpanded] = useState([]);
  const [options, setOptions] = useState(checkList.options);

  useEffect(() => {
    setOptions(checkList.options);
  }, [checkList]);

  const handleToggle = (index) => {
    const newExpanded = [...expanded];
    if (newExpanded.includes(index)) {
      newExpanded.splice(newExpanded.indexOf(index), 1);
    } else {
      newExpanded.push(index);
    }
    setExpanded(newExpanded);
  };

  const handleCheckboxChange = (index) => {
    checkList.options[index].isMarked = !checkList.options[index].isMarked;
    setOptions(checkList.options);
  };

  return (
    <div>
      <List>
        {options.map((option, index) => (
          <div key={index}>
            <ListItem>
              <ListItemIcon>
                <CheckBox
                  checked={option.isMarked}
                  onClick={() => handleCheckboxChange(index)}
                />
              </ListItemIcon>
                <Heading level={4} text={option.text} className={"textList"}></Heading>
              {/*<h4>*/}
              {/*  {option.text}{" "}*/}
              {/*</h4>*/}
              {expanded.includes(index) ? (
                <ExpandLessIcon
                  onClick={() => handleToggle(index)}
                  className="cursor"
                />
              ) : (
                <ExpandMoreIcon
                  onClick={() => handleToggle(index)}
                  className="cursor"
                />
              )}
            </ListItem>
            <Collapse
              in={expanded.includes(index)}
              timeout="auto"
              unmountOnExit
            >
              <h4 className="checkListOptionExp">{option.explanation}</h4>
            </Collapse>
          </div>
        ))}
      </List>
    </div>
  );
}

const CheckBox = ({ checked, onClick }) => {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);
  return (
    <div
      style={{
        width: "27px",
        height: "27px",
        border: "1.5px solid black",
        borderRadius: "6px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: " color 1s ease",
      }}
      onClick={() => {
        setIsChecked(!isChecked);
        onClick();
      }}
    >
      {isChecked && (
        <Image
          src="/sliderIcons/checkSmall.svg"
          alt={"checkSmall"}
          height={21}
          width={27}
        />
      )}
    </div>
  );
};
