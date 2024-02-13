"use client";
import TopBar from "./components/TopBar/TopBar";
import Slider from "./components/Slider/Slider";
import TabsBar from "./components/TabsBar/TabsBar";
import ButtonWrapper from "./components/Button/ButtonWrapper";
import { ProcessesContent } from "./data/content";
import "./page.css";
import { useState } from "react";

export default function MainPage() {
  const [isTabOpen, setIsTabOpen] = useState(true);
  const [openedTabNum, setOpenedTabNum] = useState(0);

  const closeTabHandler = () => {
    setIsTabOpen(false);
  };

  return (
    <div className="flexCol spaceBet screenFiller ">
      <TopBar />
      {isTabOpen ? (
        <Slider
          tabContent={ProcessesContent[0].tabs[openedTabNum]}
          closeTabHandler={closeTabHandler}
        />
      ) : (
        <div className="rtl">
          <h1>דף נחיתה</h1>{" "}
        </div>
      )}
      <TabsBar processTabs={ProcessesContent[0].tabs} />
      {/* <ButtonWrapper /> */}
    </div>
  );
}
