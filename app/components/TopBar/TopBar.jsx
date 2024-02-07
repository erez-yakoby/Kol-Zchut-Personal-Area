import React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid, Divider, Typography } from "@mui/material";
import "./TopBar.css";
import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";

function TopBar() {
  return (
    <div className="main">
      <div className="bar">
        <div dir="row">
          <Typography className="text">
            <ExploreRoundedIcon className="icon" />
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

// function TopBar() {
//   return (
//     <div>
//       <Grid
//         container
//         direction="row"
//         justifyContent="space-between"
//         alignItems="center"
//         className="grid"
//       >
//         <h6 id="bar1">
//           <Typography
//             id="typo"
//             component="div"
//             sx={{
//               fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//             }}
//           >
//             <strong>העוזר לפיטורים</strong>
//           </Typography>
//         </h6>
//         <h6 id="bar2">
//           <Typography
//             id="typo"
//             component="div"
//             sx={{
//               fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//             }}
//           >
//             <strong>זכותך</strong> - העוזר האישי שלך למימוש הזכויות
//           </Typography>
//         </h6>
//       </Grid>
//       {/* <Divider /> */}
//     </div>
//   );
// }

// function TopBar() {
//   return (
//     <div>
//       <Box sx={{ flexGrow: 1 }}>
//         <AppBar position="static">
//           <Toolbar variant="regular">
//             <h6>
//               העוזר לפיטורים
//             </h6>
//             <h6>
//               <Typography id="typo" component="div" sx={{ flexGrow: 1, marginLeft: 0 }}>
//                 זכותך - העוזר האישי שלך למימוש זכויות
//               </Typography>
//             </h6>
//           </Toolbar>
//         </AppBar>
//       </Box>
//     </div>
//   );
// }

export default TopBar;
