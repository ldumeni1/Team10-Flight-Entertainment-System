import { Box, List, ListItem, ListItemText, Typography, Menu, MenuList, MenuItem, Grid} from "@mui/material";
import { borders, sizing, flexbox } from '@mui/system';
import { useState } from 'react';

function FoodMenu(props){
    const fontStyles = {fontSize: "2em"}

    const [foodDisplay, setFoodDisplay] = useState(true);
    const [drinkDisplay, setDrinkDisplay] = useState(false);

    const handleFoodDisplay = () => {
          setFoodDisplay(true)
          setDrinkDisplay(false)
    }
    const handleDrinkDisplay = () => {
          setDrinkDisplay(true)
          setFoodDisplay(false)
    }
    const addToTotal = () => {
        
    }

    return(
        <Grid 
            container spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
        <Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center', border: 1, borderColor: 'primary.main', }}>
            <List>
                <ListItem button={true} onClick={handleFoodDisplay}>
                    <ListItemText primary="Food" />
                </ListItem>
                <ListItem button={true} onClick={handleDrinkDisplay}>
                    <ListItemText primary="Drink" />
                </ListItem>
            </List>
            {foodDisplay &&
            <MenuList>
                <MenuItem style={fontStyles} onClick={addToTotal}>Peanuts: 0.50$</MenuItem>
                <MenuItem style={fontStyles} onClick={addToTotal}>Pretzels: 1.00$</MenuItem>
                <MenuItem style={fontStyles} onClick={addToTotal}>Fruit Bowl: 2.50$</MenuItem>
                <MenuItem style={fontStyles} onClick={addToTotal}>Sandwich: 5:00$</MenuItem>
                <MenuItem style={fontStyles} onClick={addToTotal}>Soup: 3:50$</MenuItem>
            </MenuList>}
            {drinkDisplay &&
            <MenuList>
                <MenuItem style={fontStyles}>Water: Free</MenuItem>
                <MenuItem style={fontStyles}>Soda: 2.00$</MenuItem>
                <MenuItem style={fontStyles}>Alcohol: 6:00$</MenuItem>
                <MenuItem style={fontStyles}>Sparkling Water: 1:00$</MenuItem>
            </MenuList>}
        </Box>
        </Grid>
        <Grid>
        <Box sx={{ justifyContent: 'center', border: 1, borderColor: 'primary.main', }}>
            Order Total:
        </Box>
        </Grid>
        </Grid>
    );
}
export default FoodMenu;