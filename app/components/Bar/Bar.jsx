import React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { Grid } from '@mui/material';
import './Bar.css';

function Bar() {
  return (
    <div>
      <Grid container  direction="row"  justifyContent="space-between"  alignItems="center">
      <h6 id="bar1"> 
      <Typography id="typo" component="div" sx={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <strong>העוזר לפיטורים</strong>
      </Typography>
      </h6>
      <h6 id="bar2">
      <Typography id="typo" component="div" sx={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <strong>זכותך</strong> - העוזר האישי שלך למימוש הזכויות
      </Typography>
      </h6>
      </Grid>

    </div>
  );
}


// function Bar() {
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

export default Bar;
