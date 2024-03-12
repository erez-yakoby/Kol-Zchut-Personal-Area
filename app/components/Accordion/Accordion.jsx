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
    tabs[index].progressPerc = 100;
    setActiveIndex(index + 1 === tabs.length ? 0 : index + 1);
  };

  return (
    <div className="accordion">
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
