import { useEffect, useState } from "react";
import { Collapse, List, ListItem, ListItemIcon } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Image from "next/image";
import Heading from "@/app/components/Heading/Heading";
import { IncomeTax, VacationDays, LastSalary } from "../arrow";

export default function CheckAccordion({ checkList }) {
  const [expanded, setExpanded] = useState(null);
  const [options, setOptions] = useState(checkList.options);

  useEffect(() => {
    setOptions(checkList.options);
    setExpanded(null);
  }, [checkList]);

  const handleToggle = (index) => {
    expanded == index ? setExpanded(null) : setExpanded(index);
  };

  const handleCheckboxChange = (index) => {
    checkList.options[index].isMarked = !checkList.options[index].isMarked;
    setOptions(checkList.options);
  };

  // let ChecklistPhoto = null;

  // if (options[index].checklistphoto === "IncomeTax") {
  //   ChecklistPhoto = <IncomeTax />;
  // } else if (options[index].checklistphoto === "VacationDays") {
  //   ChecklistPhoto = <VacationDays />;
  // } else if (options[index].checklistphoto === "LastSalary") {
  //   ChecklistPhoto = <LastSalary />;
  // }
  const getChecklistPhoto = (checklistphoto) => {
    switch (checklistphoto) {
      case "IncomeTax":
        return <IncomeTax />;
      case "VacationDays":
        return <VacationDays />;
      case "LastSalary":
        return <LastSalary />;
      default:
        return null;
    }
  };

  return (
    <div>
      <List sx={{ padding: 0 }}>
        {options.map((option, index) => (
          <div key={index}>
            <ListItem>
              <ListItemIcon>
                <CheckBox
                  checked={option.isMarked}
                  onClick={() => handleCheckboxChange(index)}
                />
              </ListItemIcon>
              <Heading
                level={4}
                text={option.text}
                className={"textList"}
              ></Heading>
              {expanded == index ? (
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
            <Collapse in={expanded == index} timeout="auto" unmountOnExit>
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
          src="/sliderIcons/checksmall.svg"
          alt={"checksmall"}
          height={21}
          width={27}
        />
      )}
    </div>
  );
};
