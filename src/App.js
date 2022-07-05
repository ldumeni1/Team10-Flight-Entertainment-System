import { AppBar, Toolbar, IconButton, Typography, Box, Badge} from '@mui/material'
import {Menu, Mail, Notifications, AccountCircle, More, FlightTakeoff, Restaurant,MovieFilter, PhoneIphone, RestaurantMenu, NotificationsActive, Warning} from '@mui/icons-material'
import { borders, flexbox } from '@mui/system';
import { useState } from 'react';

import FoodMenu from './FoodMenu.js';
import PhoneMenu from './PhoneMenu.js';
import EntertainmentMenu from './EntertainmentMenu.js';

const buttonStyles = {color: "red"}

const boxStyles = {
    display: "flex", 
    alignItems: "center",
    padding: "50px",
    minHeight: "80vh"
}

function App() {
  
const [entertainmentMenu, setEntertainmentMenu] = useState(true);
  const handleEntertainmentButton = () => {
    setEntertainmentMenu(true);
    setFoodMenu(false);
    setPhoneMenu(false);
  }

  const [foodMenu, setFoodMenu] = useState(false);
  const handleFoodButton = () => {
    setFoodMenu(true);
    setPhoneMenu(false);
  }  

  const [phoneMenu, setPhoneMenu] = useState(false);
  const handlePhoneButton = () => {
    setPhoneMenu(true);
    setFoodMenu(false);
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
            
            <IconButton
              size="large"
              color="inherit"
              onClick={handlePhoneButton}
            >
                <Restaurant/>
                <MovieFilter/>
                <PhoneIphone/>
                <RestaurantMenu/>
                <NotificationsActive/>
                <Warning/>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
    
    {foodMenu && <Box style={boxStyles}>
      <FoodMenu />
    </Box>}

    {phoneMenu && <Box style={boxStyles}>
      <PhoneMenu />
    </Box>}

    {entertainmentMenu && <Box style={{paddingTop:"10px"}}>
      <EntertainmentMenu />
    </Box>}
  </>
  );
}

export default App;
