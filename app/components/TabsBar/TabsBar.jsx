"use client";
import React from "react";
import { Button } from "@mui/material";

const TabsBar = ({ processTabs, selectTabHandler }) => {
  return (
    <div className="flexRow rtl tabsBar green">
      {processTabs.map((tab, index) => {
        return (
          <Button
            key={index}
            variant="contained"
            onClick={selectTabHandler}
            id={index}
          >
            {tab.name}
          </Button>
        );
      })}
    </div>
  );
};

export default TabsBar;
