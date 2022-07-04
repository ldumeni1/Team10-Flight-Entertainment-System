import {Grid, Paper, Typography} from '@mui/material'

import beeMovie from "./beeMovie.jpg"
import theRoom from "./theRoom.jpg"
import airplane from "./airplane.jpg"
import montyPython from "./montyPython.jpg"
import shrek from "./shrek.jpg"
import shrek2 from "./shrek2.jpg"

function Movies() {
    return (
        <Grid container>
            <Grid item xs={4} style={{padding:'50px'}}>
                <Paper>
                    <Typography style={{paddingLeft:"110px", fontFamily:'cursive', font:'Lucida Handwriting'}}><b>The Bee Movie</b></Typography>
                    <img src={beeMovie} height={'250px'} width={"300px"} style={{paddingLeft:'17px'}}/>
                </Paper>
            </Grid>
            <Grid item xs={4} style={{padding:'50px'}}>
                <Paper>
                    <Typography style={{paddingLeft:"110px", fontFamily:'cursive', font:'Lucida Handwriting'}}>The Room</Typography>
                    <img src={theRoom} height={'250px'} width={"300px"} style={{paddingLeft:'17px'}}/>
                </Paper>
            </Grid>
            <Grid item xs={4} style={{padding:'50px'}}>
                <Paper>
                    <Typography style={{paddingLeft:"110px", fontFamily:'cursive', font:'Lucida Handwriting'}}>Airplane!</Typography>
                    <img src={airplane} height={'250px'} width={"300px"} style={{paddingLeft:'17px'}}/>
                </Paper>
            </Grid>
            <Grid item xs={4} style={{padding:'50px'}}>
                <Paper>
                    <Typography style={{paddingLeft:"35px", fontFamily:'cursive', font:'Lucida Handwriting'}}>Monty Python and The Holy Grail</Typography>
                    <img src={montyPython} height={'250px'} width={"300px"} style={{paddingLeft:'17px'}}/>
                </Paper>
            </Grid>
            <Grid item xs={4} style={{padding:'50px'}}>
                <Paper>
                    <Typography style={{paddingLeft:"130px", fontFamily:'cursive', font:'Lucida Handwriting'}}>Shrek</Typography>
                    <img src={shrek} height={'250px'} width={"300px"} style={{paddingLeft:'17px'}}/>
                </Paper>
            </Grid>
            <Grid item xs={4} style={{padding:'50px'}}>
                <Paper>
                    <Typography style={{paddingLeft:"130px", fontFamily:'cursive', font:'Lucida Handwriting'}}>Shrek 2</Typography>
                    <img src={shrek2} height={'250px'} width={"300px"} style={{paddingLeft:'17px'}}/>
                </Paper>
            </Grid>
        </Grid>
    );
}
export default Movies;