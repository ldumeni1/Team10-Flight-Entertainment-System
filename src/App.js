import { AppBar, Toolbar, IconButton, Typography, Box, Badge} from '@mui/material'
import {Menu, Mail, Notifications, AccountCircle, More, FlightTakeoff, Restaurant} from '@mui/icons-material'
import { borders, flexbox } from '@mui/system';
import { useState } from 'react';

import FoodMenu from './FoodMenu.js';
import PhoneMenu from './PhoneMenu.js';
import EntertainmentMenu from './EntertainmentMenu.js';
import FlightSummaryMenu from './FlightSummaryMenu.js';

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
    setFlightSummaryMenu(false);
  }

  const [foodMenu, setFoodMenu] = useState(false);
  const handleFoodButton = () => {
    setFoodMenu(true);
    setPhoneMenu(false);
    setEntertainmentMenu(false);
    setFlightSummaryMenu(false);
  }  

  const [phoneMenu, setPhoneMenu] = useState(false);
  const handlePhoneButton = () => {
    setPhoneMenu(true);
    setFoodMenu(false);
    setEntertainmentMenu(false);
    setFlightSummaryMenu(false);
  }

  const [flightSummaryMenu, setFlightSummaryMenu] = useState(false);
  const handleFlightSummaryButton = () => {
    setFlightSummaryMenu(true);
    setPhoneMenu(false);
    setFoodMenu(false);
    setEntertainmentMenu(false);
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
            onClick={handleFlightSummaryButton}
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
            <IconButton onClick={handleEntertainmentButton} size="large" aria-label="show 4 new mails" color="inherit">
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
              onClick={handlePhoneButton}
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
      <FoodMenu />
    </Box>}

    {phoneMenu && <Box style={boxStyles}>
      <PhoneMenu />
    </Box>}

    {entertainmentMenu && <Box style={{paddingTop:"10px"}}>
      <EntertainmentMenu />
    </Box>}

    {flightSummaryMenu && <Box style={boxStyles}>
      <FlightSummaryMenu />
    </Box>}
  </>
  );
}

export default App;
