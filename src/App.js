import { AppBar, Toolbar, IconButton, Typography, Box, Badge } from '@mui/material'
import {Menu, Mail, Notifications, AccountCircle, More, Bluetooth, Restaurant} from '@mui/icons-material'
import { useState } from 'react';

import FoodMenu from './FoodMenu.js'

function App() {
  const buttonStyles = {color: "red"}

  const [foodMenu, setFoodMenu] = useState(false);

  const handleFoodButton = () => {
    setFoodMenu(true)
  }

  return (
  <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            style = {buttonStyles}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <Bluetooth/>
          </IconButton>
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit" style={buttonStyles}>
              <Badge badgeContent={4} color="error">
                <Mail />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              color="inherit"
              onClick={handleFoodButton}
            >
              <Badge badgeContent={17} color="error">
                <Restaurant/>
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
            >
              <More />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
    
    {foodMenu && <Box>
      <FoodMenu foodMenu={foodMenu}/>
    </Box>}
  </>
  );
}

export default App;
