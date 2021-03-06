import { AppBar, Toolbar, IconButton, Typography, Box, Badge } from '@mui/material'
import { Menu, Mail, Notifications, AccountCircle, More, FlightTakeoff, Restaurant, MovieFilter, PhoneIphone, RestaurantMenu, NotificationsActive, Warning } from '@mui/icons-material'
import { borders, flexbox } from '@mui/system';
import { useState } from 'react';

import FoodMenu from './FoodMenu.js';
import PhoneMenu from './PhoneMenu.js';
import EntertainmentMenu from './EntertainmentMenu.js';
import FlightSummaryMenu from './FlightSummaryMenu.js';
import UMBCLogo from './UMBC-vertical-logo-RGB.png'

const buttonStyles = { color: "red" }

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

  const handleEmergencyButton = () => {
    confirm('WARNING! - This function is for emergencies only! If you need normal assistance, use the flight attendant button.');
  }

  const handleAttendantButton = () => {
    alert('Flight Attendant Assistance Requested');
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: '#EEBC1D' }}>
          <Toolbar>
            <img src={UMBCLogo} height={'45px'} width={"35px"} style={{ paddingRight: '20px' }} />

            <Typography
              variant="h6"
              noWrap
              component="div"
              color="black"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              TEAM10-FLIGHT-ENTERTAINMENT-SYSTEM
            </Typography>

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

              <IconButton
                size="large"
                backgroundcolor="black"
                onClick={handleFoodButton}
              >
                <Restaurant />
              </IconButton>
              <IconButton
                size="large"
                backgroundcolor="black"
                onClick={handleEntertainmentButton}
              >
                <MovieFilter />
              </IconButton>
              <IconButton
                size="large"
                backgroundcolor="black"
                onClick={handlePhoneButton}
              >
                <PhoneIphone />
              </IconButton>
              <IconButton
                size="large"
                backgroundcolor="black"
                onClick={handleFlightSummaryButton}
              >
                <FlightTakeoff />
              </IconButton>
              <IconButton
                size="large"
                backgroundcolor="black"
                onClick={handleAttendantButton}
              >
                <NotificationsActive />
              </IconButton>
              <IconButton
                size="large"
                backgroundcolor="black"
                onClick={handleEmergencyButton}
              >
                <Warning />
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

      {entertainmentMenu && <Box style={{ paddingTop: "10px" }}>
        <EntertainmentMenu />
      </Box>}

      {flightSummaryMenu && <Box style={boxStyles}>
        <FlightSummaryMenu />
      </Box>}
    </>
  );
}

export default App;
