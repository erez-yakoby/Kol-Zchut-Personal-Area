import React from "react";
import Slider from "../../Slider/Slider";
import Image from "next/image";

const AccordionItem = ({ tab, isOpen, onClick, handleNextTab }) => {
  const renderBanner = () => {
    return (
      <>
        {tab.id == 0 ? (
          <div className="accordionFirstTabBanner">
            <h6 className="verticalWriting">זכותך</h6>
            <h3 className="verticalWriting notbold">{tab.name}</h3>
          </div>
        ) : (
          <div className="accordionBanner">
            <Image src={tab.iconPath} alt={tab.name} width={18} height={18} />
            <h5 className="verticalWriting">{tab.name}</h5>
          </div>
        )}
      </>
    );
  };
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
        renderBanner()
      )}
    </div>
  );
};

export default AccordionItem;
