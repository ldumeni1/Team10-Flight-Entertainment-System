import { useState, useEffect, useRef } from 'react';
import { borders, sizing, flexbox, spacing } from '@mui/system';
import {
    Grid,
    Paper,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    TextField,
    Button,
    Typography,
    List,
    ListItem,
    ListItemText
} from "@mui/material";

function FlightSummaryMenu() {

    const [submittedOrders, setSubmittedOrders] = useState(JSON.parse(localStorage.getItem('orders')))
    const [textSelected, setTextSelected] = useState(false);
    const [emailSelected, setEmailSelected] = useState(true);

    const handleTextSelected = (event) => {
        setTextSelected(true)
        setEmailSelected(false)
    }

    const handleEmailSelected = (event) => {
        setTextSelected(false)
        setEmailSelected(true)
    }

    var orders = JSON.parse(localStorage.getItem('orders'))

    return (
        <Grid container
            direction="row"
        >
            <Grid container
                direction="column"
            >
                <Grid item xs={1} style={{ paddingLeft: "75px", paddingBottom: "50px", width: 300 }}>
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
                <Grid item xs={1} style={{ paddingLeft: "75px", paddingBottom: "50px", width: 300 }}>
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
                    </Paper>
                </Grid>
                {textSelected ? (
                    <Grid item style={{ paddingTop: "20px", paddingLeft: "75px", width: 300 }} xs={4}>
                        <Paper style={{ padding: "10px" }}>
                            <TextField
                                required
                                id="phonenumber"
                                label="Phone Number"
                                variant="standard"
                                value="Enter number here"
                            />
                        </Paper>
                    </Grid> ):(
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
                <Grid item xs={1} style={{ paddingLeft: "200px", paddingBottom: "10px", width: 500 }}>
                    <h2>Orders Below</h2>
                    <Paper style={{ display: "flex", maxHeight: '400px', overflow: 'auto' }}>
                        <List>
                            {orders.map((item) => (
                                <ListItem key={item.price}>
                                    <ListItemText>x{item.amount} {item.name} {item.price}</ListItemText>
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container
                direction="row"
            >
            </Grid>
        </Grid>
    );
}
export default FlightSummaryMenu;