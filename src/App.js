import { AppBar, Toolbar, IconButton, Typography, Box, Badge} from '@mui/material'
import {Menu, Mail, Notifications, AccountCircle, More, FlightTakeoff, Restaurant} from '@mui/icons-material'
import { borders, flexbox } from '@mui/system';
import { useState } from 'react';

import FoodMenu from './FoodMenu.js'

function App() {
  const buttonStyles = {color: "red"}
  const boxStyles = {
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center",
    minHeight: "80vh"
  }

  const [foodMenu, setFoodMenu] = useState(false);

  const handleFoodButton = () => {
    if(foodMenu)
      setFoodMenu(false)
    else
      setFoodMenu(true)
  }

  return (
  <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <FlightTakeoff/>
          </IconButton>
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            color="white"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            TEAM10-FLIGHT-ENTERTAINMENT-SYSTEM
          </Typography>
          
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge>
                <Mail />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              color="inherit"
              onClick={handleFoodButton}
            >
              <Badge color="error">
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
    
    {foodMenu && <Box style={boxStyles}>
      <FoodMenu foodMenu={foodMenu}/>
    </Box>}
  </>
  );
}

export default App;
