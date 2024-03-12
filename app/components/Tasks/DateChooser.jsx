"use client";

import * as React from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Heading from "@/app/components/Heading/Heading";

export default function DatePChooser({ task, onSelect }) {
  const [value, setValue] = React.useState(dayjs());

  return (
    <div>
      <Heading level={4} text={task.taskObj.text} className={"textList"} />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
            task.isFinished = true;
            onSelect();
          }}
          format="DD/MM/YYYY"
        />
      </LocalizationProvider>
    </div>
  );
}
