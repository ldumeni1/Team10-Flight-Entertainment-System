import { ConstructionOutlined } from "@mui/icons-material";
import {
    Box, List, ListItem, ListItemText, Typography, Menu, MenuList,
    MenuItem, Grid, Paper, Radio, RadioGroup, FormControlLabel,
    FormControl, FormLabel, TextField
} from "@mui/material";
import { borders, sizing, flexbox, spacing } from '@mui/system';
import { useState, useEffect } from 'react';

//start of function tag that displays for <FoodMenu/> in App.js
function FoodMenu(props) {
    //styles obj for fonts
    const fontStyles = { fontSize: "2em" }

    //React state variables & state hooks
    const [foodDisplay, setFoodDisplay] = useState(true);
    const [drinkDisplay, setDrinkDisplay] = useState(false);
    const [orderSelection, setOrderSelection] = useState([]);

    const [textSelected, setTextSelected] = useState(false);
    const [emailSelected, setEmailSelected] = useState(true);

    ///event handlers for radio buttons and forms control of email vs sms selections
    const handleTextSelected = (event) => {
        setTextSelected(true)
        setEmailSelected(false)
    }

    const handleEmailSelected = (event) => {
        setTextSelected(false)
        setEmailSelected(true)
    }

    //handler events for food or drink display on menu
    const handleFoodDisplay = () => {
        setFoodDisplay(true)
        setDrinkDisplay(false)
    }

    const handleDrinkDisplay = () => {
        setDrinkDisplay(true)
        setFoodDisplay(false)
    }

    //add to order functiuon upon add to order
    //this triggers EVERY TIME an item is added to cart
    const addToOrder = (event) => { //argument current event
        var arr = event.currentTarget.innerText.split(": ");
        var name = arr[0];
        var amount = 1
        var price = arr[1];
        var total = document.getElementById("total").innerHTML;
        document.getElementById("total").innerHTML = parseFloat(total) + parseFloat(price);
        var hasUpdated = false

        //function to map new orders and update
        const updatedOrderSelection = orderSelection.map((entry) => {
            if (entry.name === name) {
                const updatedEntry = {
                    ...entry,
                    amount: entry.amount + 1,
                };
                hasUpdated = true;
                return updatedEntry;
            }
            return entry;
        });

        if (!hasUpdated) { //if there was an update, concatonate
            const appendedOrderSelection = orderSelection.concat({ name, price, amount });
            setOrderSelection(appendedOrderSelection)
        } else { //otherwise this was a new item not in the list before
            setOrderSelection(updatedOrderSelection)
        }
    }

    //remove function from current cart
    const removeFromOrder = (name, price, amount) => {
        var total = document.getElementById("total").innerHTML;
        document.getElementById("total").innerHTML = parseFloat(total) - parseFloat(price);

        if (amount > 1) { //if removing would not result in zero items
            const updatedOrderSelection = orderSelection.map((entry) => {
                if (entry.name === name) {
                    const updatedEntry = {
                        ...entry,
                        amount: entry.amount - 1,
                    };
                    return updatedEntry;
                }
                return entry;
            });
            setOrderSelection(updatedOrderSelection)
        } else { //else filter the item from the list
            const removedOrderSelection = orderSelection.filter((entry) => entry.name != name)
            setOrderSelection(removedOrderSelection)
        }
    }

    //all possible orders
    const allItems = ["Peanuts", "Pretzels", "Fruit Bowl", "Sandwich", "Soup", "Water", "Soda", "Alcohol", "Sparkling Water"]

    //on button for order submit
    //adds to local storage
    const handleOrderConfirm = () => {
        const localStorageOrders = JSON.parse(localStorage.getItem('orders'))
        //container for local storage + current order
        var condensedLocalStorageOrders = []
        //if this is not the first pass to local storage
        if (localStorageOrders != null) {
            //loop through allItems, check local storage and the order array
            //for that same item, condense them
            allItems.forEach(item => {
                const x = localStorageOrders.filter((entry) => entry.name === item)
                const y = orderSelection.filter((order) => order.name === item)
                if (x.length !== 0 && y.length !== 0) {
                    const condensedEntry = {
                        name: item,
                        price: x[0].price,
                        amount: x[0].amount + y[0].amount
                    }
                    condensedLocalStorageOrders = condensedLocalStorageOrders.concat(condensedEntry)
                } else if (x.length !== 0) {
                    condensedLocalStorageOrders = condensedLocalStorageOrders.concat(x)
                } else if (y.length !== 0) {
                    condensedLocalStorageOrders = condensedLocalStorageOrders.concat(y)
                }
            })
            localStorage.setItem('orders', JSON.stringify(condensedLocalStorageOrders))
        } else {
            localStorage.setItem('orders', JSON.stringify(orderSelection))
        }
        setOrderSelection([]) //clear the current cart
    }

    //the return render
    return (
        <Grid //row display container
            container spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Grid>
                {/* food and beverage displays */}
                <h2>Food &amp; Beverage Selection</h2>
                <Box sx={{ display: 'flex', justifyContent: 'center', border: 2, borderColor: 'primary.main', }}>
                    <List>
                        <ListItem button={true} onClick={handleFoodDisplay}>
                            <ListItemText
                                disableTypography
                                primary="Food"
                                style={fontStyles} />
                        </ListItem>
                        <ListItem button={true} onClick={handleDrinkDisplay}>
                            <ListItemText
                                disableTypography
                                primary="Drink"
                                style={fontStyles} />
                        </ListItem>
                    </List>
                    {foodDisplay &&
                        <MenuList>
                            <MenuItem style={fontStyles} onClick={addToOrder}>Peanuts: 0.50$</MenuItem>
                            <MenuItem style={fontStyles} onClick={addToOrder}>Pretzels: 1.00$</MenuItem>
                            <MenuItem style={fontStyles} onClick={addToOrder}>Fruit Bowl: 2.50$</MenuItem>
                            <MenuItem style={fontStyles} onClick={addToOrder}>Sandwich: 5:00$</MenuItem>
                            <MenuItem style={fontStyles} onClick={addToOrder}>Soup: 3:50$</MenuItem>
                        </MenuList>}
                    {drinkDisplay &&
                        <MenuList>
                            <MenuItem style={fontStyles} onClick={addToOrder}>Water: 0.00$</MenuItem>
                            <MenuItem style={fontStyles} onClick={addToOrder}>Soda: 2.00$</MenuItem>
                            <MenuItem style={fontStyles} onClick={addToOrder}>Alcohol: 6:00$</MenuItem>
                            <MenuItem style={fontStyles} onClick={addToOrder}>Sparkling Water: 1:00$</MenuItem>
                        </MenuList>}
                </Box>
            </Grid>

            {/* Form of payment form radio display */}
            <Grid item xs={2} style={{ paddingLeft: "75px", paddingBottom: "25px", paddingRight:'25px', width: 300 }}>
                <Paper style={{ padding: "10px", width: 170 }}>
                    <FormControl>
                        <FormLabel id="call-payment">Form of Payment</FormLabel>
                        <RadioGroup
                            defaultValue="credit"
                            name="payment-method"
                        >
                            <FormControlLabel value="credit" control={<Radio />} label="Credit Card" />
                            <FormControlLabel value="points" control={<Radio />} label="Rewards Points" />
                        </RadioGroup>
                    </FormControl>
                    <TextField
                        required
                        id="credentials"
                        label="Credentials"
                        defaultValue="Enter Information Here"
                        variant="standard"
                    />
                </Paper>
            </Grid>

            {/* Receipt type form radio display */}
            <Grid item xs={2} style={{ paddingLeft: "75px", paddingBottom: "25px", width: 300 }}>
                <Paper style={{ padding: "10px", width: 250 }}>
                    <FormControl>
                        <FormLabel id="receipt-type">Receipt Type</FormLabel>
                        <RadioGroup
                            defaultValue="email"
                            name="payment-method"
                        >
                            <FormControlLabel onChange={handleEmailSelected} value="email" control={<Radio />} label="Email" />
                            <FormControlLabel onChange={handleTextSelected} value="sms" control={<Radio />} label="Text" />
                        </RadioGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel id="receipt-type">Would you like a second receipt?</FormLabel>
                        <RadioGroup
                            defaultValue="yes"
                            name="payment-method"
                        >
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </Paper>
            </Grid>

            <Grid //column display container
                container spacing={0}
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                {/* conditional cart render */}
                <Grid item style={{ flexGrow: "1" }}>
                    <h2 text-align="center">Cart Items</h2>
                    <Box sx={{ display: 'flex', justifyContent: 'center', width: 375, border: 2, borderColor: 'primary.main' }}>
                        {orderSelection.length != 0 ?
                            <ul>
                                {orderSelection.map((item) => (
                                    <li style={{ fontSize: "1.5em", paddingRight: "10px" }} key={item.price}>{item.name} x{item.amount} &nbsp;
                                        <span><button id="remove-button" onClick={() => removeFromOrder(item.name, item.price, item.amount)}> remove </button></span>
                                    </li>
                                ))}
                            </ul> : <p>Cart is Empty</p>}
                    </Box>
                </Grid>
                <Box>
                    <Typography paddingTop="7px" style={fontStyles}>Order Total: <span id="total">0.00</span>$</Typography>
                </Box>
                {/* confirm button to fire cascading events */}
                <Grid>
                    <button id='confirm-button' class="btn" onClick={handleOrderConfirm}> Confirm Order </button>
                </Grid>
            </Grid>
        </Grid>
    );
}
export default FoodMenu;