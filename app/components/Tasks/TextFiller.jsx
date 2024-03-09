import React from "react";
import Heading from "@/app/components/Heading/Heading";

const TextFiller = ({ task }) => {
  return (
    <div>
      <Heading
        level={4}
        text={task.text + "  " + task.filling}
        className={"textList"}
      />
    </div>
  );
};

export default TextFiller;
