import React from "react";
import Slider from "../../Slider/Slider";
import Image from "next/image";

const AccordionItem = ({ tab, isOpen, onClick, handleNextTab }) => {
  return (
    <div className={isOpen ? "selectedDiv" : "regDiv"} onClick={onClick}>
      {isOpen ? (
        <Slider tabContent={tab} nextTabHandler={handleNextTab} />
      ) : (
        <div className="accordionBanner">
          <Image src={tab.iconPath} alt={tab.name} width={18} height={18} />
          <h5 className="verticalWriting">{tab.name}</h5>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
