import React from "react";
import Typography from "@mui/material/Typography";
import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";

function TopBar() {
  return (
    <div className="topBar">
      <div className="flexRow rtl spaceBet">
        <div className="flexRow">
          <ExploreRoundedIcon className="m-6" />
          <Typography className="text">
            <strong className="boldText">זכותך</strong> העוזר האישי שלך למימוש
            הזכויות
          </Typography>
        </div>
        <Typography className="text">
          <strong>העוזר לפיטורים</strong>
        </Typography>
      </div>
      <hr className="divider" />
    </div>
  );
}

export default TopBar;
