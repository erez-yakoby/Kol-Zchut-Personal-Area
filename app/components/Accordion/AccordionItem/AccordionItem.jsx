import React from "react";
import Slider from "../../Slider/Slider";
import Image from "next/image";

const AccordionItem = ({ tab, isOpen, onClick, handleNextTab }) => {
  return (
    <div
      className={
        isOpen
          ? "selectedDiv "
          : tab.progressPerc == 100
          ? "regDiv finishedDiv"
          : "regDiv"
      }
      onClick={onClick}
    >
      {isOpen ? (
        <Slider tabContent={tab} nextTabHandler={handleNextTab} />
      ) : (
        <div className="accordionBanner">
          {tab.id == 0 ? (
            <>
              <h5 className="verticalWriting">זכותך</h5>
              <h3 className="verticalWriting">{tab.name}</h3>
            </>
          ) : (
            <>
              <Image src={tab.iconPath} alt={tab.name} width={18} height={18} />
              <h5 className="verticalWriting">{tab.name}</h5>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
