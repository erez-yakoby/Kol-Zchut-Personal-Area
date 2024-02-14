"use client";
import TopBar from "./components/TopBar/TopBar";
import Slider from "./components/Slider/Slider";
import TabsBar from "./components/TabsBar/TabsBar";
import { ProcessesContent } from "./data/content";
import "./page.css";
import { useState } from "react";

export default function MainPage() {
  const [isTabOpen, setIsTabOpen] = useState(true);
  const [openedTabNum, setOpenedTabNum] = useState(0);

  const closeTabHandler = () => {
    setIsTabOpen(false);
  };

  // for selecting tab from the tab bar
  const selectTabHandler = (event: any) => {
    setOpenedTabNum(event.target.id);
    setIsTabOpen(true);
  };

  // when a user finish the last slide of the current tab
  const nextTabHandler = () => {
    console.log("1");
    if (openedTabNum === ProcessesContent[0].tabs.length - 1) {
      console.log("2");
      // last tab
      setIsTabOpen(false);
    } else {
      console.log("3");
      // move to next tab
      setOpenedTabNum(openedTabNum + 1);
    }
  };

  return (
    <div className="flexCol spaceBet screenFiller ">
      <TopBar />
      {isTabOpen ? (
        <Slider
          tabContent={ProcessesContent[0].tabs[openedTabNum]}
          closeTabHandler={closeTabHandler}
          nextTabHandler={nextTabHandler}
        />
      ) : (
        <div className="rtl">
          <h1>דף נחיתה</h1>{" "}
        </div>
      )}
      <TabsBar
        processTabs={ProcessesContent[0].tabs}
        selectTabHandler={selectTabHandler}
      />
    </div>
  );
}
