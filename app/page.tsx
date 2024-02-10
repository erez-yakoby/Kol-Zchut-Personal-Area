import WebsiteScreen from "@/lib/components/website-screen";
import { COURSE_WELCOME_TEXT } from "@/lib/config";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense }from "react";
import Box from "@mui/material/Box";
import TopBar from "./components/TopBar/TopBar";
import Calendar from "./components/calendar";
import Paper from "@mui/material/Paper";
import ProgressBar from "./components/progressbar";
import Main from "./components/Main/Main";
import Slider from "./components/Slider/Slider";
import "./page.css";
import ButtonWrapper from './components/Button/ButtonWrapper';


export default function DenseAppBar() {
  return (
    <div>
      <TopBar />
      <div dir="row" className="mainFrame">
        <h1 id="processbar" style={{ height: "100%" }}>
          Progress Bar
        </h1>
        <Slider />
      </div>

      <div>
        <Main></Main>
      </div>
      <div>
        <Box>
          <h1 id="timeline">Timeline</h1>
        </Box>
      </div>
      <ButtonWrapper/>
    </div>
  );
}
