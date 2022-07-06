import { ConstructionOutlined } from "@mui/icons-material";
import { Box, List, ListItem, ListItemText, Typography, Menu, MenuList, MenuItem, Grid } from "@mui/material";
import { borders, sizing, flexbox, spacing } from '@mui/system';
import { useState, useEffect } from 'react';

function FoodMenu(props) {
    const fontStyles = { fontSize: "2em" }

    const [foodDisplay, setFoodDisplay] = useState(true);
    const [drinkDisplay, setDrinkDisplay] = useState(false);
    const [orderSelection, setOrderSelection] = useState([]);

    const handleFoodDisplay = () => {
        setFoodDisplay(true)
        setDrinkDisplay(false)
    }
    const handleDrinkDisplay = () => {
        setDrinkDisplay(true)
        setFoodDisplay(false)
    }
    const addToOrder = (event) => {
        var arr = event.currentTarget.innerText.split(": ");
        var name = arr[0];
        var amount = 1
        var price = arr[1];
        var total = document.getElementById("total").innerHTML;
        document.getElementById("total").innerHTML = parseFloat(total) + parseFloat(price);
        var hasUpdated = false

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

        if (!hasUpdated) {
            const appendedOrderSelection = orderSelection.concat({ name, price, amount });
            setOrderSelection(appendedOrderSelection)
        } else {
            setOrderSelection(updatedOrderSelection)
        }
    }

    const removeFromOrder = (name, price, amount) => {
        var total = document.getElementById("total").innerHTML;
        document.getElementById("total").innerHTML = parseFloat(total) - parseFloat(price);

        if (amount > 1) {
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
        } else {
            const removedOrderSelection = orderSelection.filter((entry) => entry.name != name)
            setOrderSelection(removedOrderSelection)
        }
    }

    const allItems = ["Peanuts", "Pretzels", "Fruit Bowl", "Sandwich", "Soup", "Water", "Soda", "Alcohol", "Sparkling Water"]
    const handleOrderConfirm = () => {
        console.log("confirming...")
        const localStorageOrders = JSON.parse(localStorage.getItem('orders'))
        var condensedLocalStorageOrders = []
        if (localStorageOrders != null) {
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
        setOrderSelection([])
    }

    return (
        <Grid
            container spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Grid>
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
            <Grid
                container spacing={0}
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item style={{ flexGrow: "1" }}>
                    <h2 text-align="center">Cart Items</h2>
                    <Box sx={{ display: 'flex', justifyContent: 'center', width: 300, border: 2, borderColor: 'primary.main' }}>
                        {orderSelection.length != 0 ?
                            <ul>
                                {orderSelection.map((item) => (
                                    <li key={item.price}>{item.name} {item.amount}
                                        <span><button onClick={() => removeFromOrder(item.name, item.price, item.amount)}> remove </button></span>
                                    </li>
                                ))}
                            </ul> : <p>Cart is Empty</p>}
                    </Box>
                </Grid>
                <Box sx={{ border: 2, borderColor: 'primary.main' }}>
                    <Typography style={fontStyles}>Order Total: <span id="total">0.00</span>$</Typography>
                </Box>
                <Grid>
                    <button onClick={handleOrderConfirm}> Confirm Order </button>
                </Grid>
            </Grid>
        </Grid>
    );
}
export default FoodMenu;