import React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';

function Bar() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="regular">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 145 }}>
              <MenuIcon />
            </IconButton>
            <h6>
              <Typography id="typo" component="div" sx={{ flexGrow: 1, marginLeft: 0 }}>
                זכותך - העוזר האישי שלך למימוש זכויות
              </Typography>
            </h6>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Bar;
