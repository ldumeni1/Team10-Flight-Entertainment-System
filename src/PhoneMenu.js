import { useState, useEffect, useRef } from 'react';
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
    Typography
} from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';

function PhoneMenu() {

    const [phoneCalls, setPhoneCalls] = useState(0);
    const [callButtonPress, setCallButtonPress] = useState(false);

    const handleCallButton = () => {
        let num_of_calls = phoneCalls
        setCallButtonPress(true);
        setPhoneCalls(num_of_calls + 1);
    }

    useEffect(() => {
        const calls = JSON.parse(localStorage.getItem('phoneCalls'));
        console.log("number of calls made: " + calls);
        if (calls > 0) {
            setPhoneCalls(calls);
        }
    }, []);

    const firstUpdate = useRef(true);
    useEffect(() => {
        localStorage.setItem('phoneCalls', JSON.stringify(phoneCalls));
    }, [phoneCalls]);

    return (
        <Grid container>
            <Grid item xs={4} style={{ paddingLeft: "75px", paddingBottom: "50px" }}>
                <Paper style={{ padding: "10px" }}>
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
                </Paper>
            </Grid>

            <Grid item xs={4} />

            <Grid item style={{ padding: "20px", alignContent: "bottom" }} xs={4}>
                <Button variant="contained" size="large" endIcon={<PhoneIcon />} onClick={handleCallButton}>
                    Submit Call
                </Button>
            </Grid>

            <Grid item style={{ paddingTop: "20px", paddingLeft: "75px" }} xs={4}>
                <Paper style={{ padding: "10px" }}>
                    <TextField
                        required
                        id="phonenumber"
                        label="Phone Number"
                        defaultValue="Enter Number Here"
                        variant="standard"
                    />
                </Paper>
            </Grid>
            {callButtonPress &&
                <Grid item xs={8}>
                    <Typography style={{ fontSize: "2em", paddingLeft: "330px", paddingTop: "10px" }}>Call Submitted</Typography>
                </Grid>}
        </Grid>
    );
}
export default PhoneMenu;