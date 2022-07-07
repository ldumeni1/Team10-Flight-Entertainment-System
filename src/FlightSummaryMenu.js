import { useState, useEffect, useRef } from 'react';
import { borders, sizing, flexbox, spacing } from '@mui/system';
import { Grid,Paper, Radio, RadioGroup, FormControlLabel,
    FormControl, FormLabel, TextField, Button, Typography,
    List, ListItem, ListItemText
} from "@mui/material";

//start of function tag that displays for <FlightSummaryMenu/> in App.js
function FlightSummaryMenu() {

    //React state hooks
    const [submittedOrders, setSubmittedOrders] = useState(JSON.parse(localStorage.getItem('orders')))
    const [textSelected, setTextSelected] = useState(false);
    const [emailSelected, setEmailSelected] = useState(true);

    //event handlers for radio buttons and forms control of email vs sms selections
    const handleTextSelected = (event) => {
        setTextSelected(true)
        setEmailSelected(false)
    }

    const handleEmailSelected = (event) => {
        setTextSelected(false)
        setEmailSelected(true)
    }

    //retrieving orders stored in local storage
    var orders = JSON.parse(localStorage.getItem('orders'))

    //useEffect that on page render generates the total bill
    useEffect(() => {
        var total = 0
        if (JSON.parse(localStorage.getItem('orders')) != null)
            orders.map((item) => (
                total = total + (parseFloat(item.price) * item.amount)
            )
            )
        document.getElementById('bill').innerHTML = total
    }, []);

    //the return render
    return (
        <Grid container //row display container
            direction="row"
        >
            <Grid container //with first row a column container
                direction="column"
            >
                {/* Form of payment form radio display */}
                <Grid item xs={1} style={{ paddingLeft: "75px", paddingBottom: "25px", width: 300 }}>
                    <Paper style={{ padding: "10px" }}>
                        <FormControl>
                            <FormLabel id="call-payment">Form of Payment</FormLabel>
                            <RadioGroup
                                defaultValue="credit"
                                name="payment-method"
                            >
                                <FormControlLabel value="credit" control={<Radio />} label="Credit Card" />
                                <FormControlLabel value="points" control={<Radio />} label="Rewards Poins" />
                            </RadioGroup>
                        </FormControl>
                    </Paper>
                </Grid>

                {/* Receipt type form radio display */}
                <Grid item xs={1} style={{ paddingLeft: "75px", paddingBottom: "25px", width: 300 }}>
                    <Paper style={{ padding: "10px" }}>
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
                        {/* Multiple receipts form radio display */}
                        <FormControl>
                            <FormLabel id="receipt-type">Would you like a second receipt?</FormLabel>
                            <RadioGroup
                                defaultValue="email"
                                name="payment-method"
                            >
                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="No" control={<Radio />} label="No" />
                            </RadioGroup>
                        </FormControl>
                    </Paper>
                </Grid>
                {/* Conditional rendering on textSelected state */}
                {/* renders either text or sms based off radio selection */}
                {textSelected ? (
                    <Grid item style={{ paddingLeft: "75px", width: 300 }} xs={2}>
                        <Paper style={{ padding: "10px" }}>
                            <TextField
                                required
                                id="phonenumber"
                                label="Phone Number"
                                variant="standard"
                            />
                        </Paper>
                    </Grid>) : (
                    <Grid item style={{ paddingTop: "20px", paddingLeft: "75px", width: 300 }} xs={4}>
                        <Paper style={{ padding: "10px" }}>
                            <TextField
                                required
                                id="email"
                                label="Email"
                                variant="standard"
                            />
                        </Paper>
                    </Grid>)}
                {/* Bill display for total and orders submitted in a condensed fashion*/}
                <Grid item xs={1} style={{ paddingLeft: "200px", paddingBottom: "10px", width: 500 }}>
                    <h2>Orders Below</h2>
                    <Paper style={{ display: "flex", maxHeight: '400px', overflow: 'auto' }}>
                        <List>
                            {JSON.parse(localStorage.getItem('orders')) != null ? orders.map((item) => (
                                <ListItem key={item.price}>
                                    <ListItemText>x{item.amount} {item.name} {parseFloat(item.price) * item.amount}$</ListItemText>
                                </ListItem>
                            )) : <Typography>No Orders Submitted</Typography>}
                        </List>
                    </Paper>
                    <h2>Your Total Is: <span id='bill'>0.00</span>$</h2>
                </Grid>
            </Grid>
        </Grid>
    );
}
export default FlightSummaryMenu;