"use client";
import Accordion from "./components/Accordion/Accordion";

import { ProcessesContent } from "./data/content";
import "./page.css";

export default function MainPage() {
  return (
    <div className="fullScreen">
      <Accordion tabs={ProcessesContent[0].tabs} />
    </div>
  );
}
