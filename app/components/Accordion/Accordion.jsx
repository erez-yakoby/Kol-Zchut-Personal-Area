import React, { useState } from "react";
import AccordionItem from "./AccordionItem/AccordionItem";

const Accordion = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClicked = (index) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  const handleNextTab = (index) => {
    setActiveIndex(index + 1 === tabs.length ? 0 : index + 1);
  };

  return (
    <div className="accordion">
      <div className="rightBar">
        <h4 className="text verticalWriting">
          <strong className="boldText">זכותך</strong> זכותך לדעת זכותך לממש
        </h4>
      </div>
      {tabs.map((tab, index) => {
        return (
          <AccordionItem
            key={index}
            index={index}
            isOpen={activeIndex === index}
            tab={tab}
            onClick={() => {
              handleTabClicked(index);
            }}
            handleNextTab={() => handleNextTab(index)}
          />
        );
      })}
    </div>
  );
};

export default Accordion;