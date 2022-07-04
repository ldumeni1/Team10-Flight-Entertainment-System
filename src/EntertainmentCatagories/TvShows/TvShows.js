import {Grid, Paper, Typography} from '@mui/material'

import theOffice from "./theOffice.jpg"
import southPark from "./southPark.jpg"
import strangerThings from "./strangerThings.png"
import spongebob from "./spongebob.jpg"
import familyGuy from "./familyGuy.jpg"
import parksNrec from "./p&r.jpg"

function TvShows() {
    return (
        <Grid container>
            <Grid item xs={4} style={{padding:'50px'}}>
                <Paper>
                    <Typography style={{paddingLeft:"110px", fontFamily:'cursive', font:'Lucida Handwriting'}}>The Office</Typography>
                    <img src={theOffice} height={'250px'} width={"300px"} style={{paddingLeft:'17px'}}/>
                </Paper>
            </Grid>
            <Grid item xs={4} style={{padding:'50px'}}>
                <Paper>
                    <Typography style={{paddingLeft:"110px", fontFamily:'cursive', font:'Lucida Handwriting'}}>South Park</Typography>
                    <img src={southPark} height={'250px'} width={"300px"} style={{paddingLeft:'17px'}}/>
                </Paper>
            </Grid>
            <Grid item xs={4} style={{padding:'50px'}}>
                <Paper>
                    <Typography style={{paddingLeft:"110px", fontFamily:'cursive', font:'Lucida Handwriting'}}>Stranger Things</Typography>
                    <img src={strangerThings} height={'250px'} width={"300px"} style={{paddingLeft:'17px'}}/>
                </Paper>
            </Grid>
            <Grid item xs={4} style={{padding:'50px'}}>
                <Paper>
                    <Typography style={{paddingLeft:"75px", fontFamily:'cursive', font:'Lucida Handwriting'}}>Spongebob Squarepants</Typography>
                    <img src={spongebob} height={'250px'} width={"300px"} style={{paddingLeft:'17px'}}/>
                </Paper>
            </Grid>
            <Grid item xs={4} style={{padding:'50px'}}>
                <Paper>
                    <Typography style={{paddingLeft:"125px", fontFamily:'cursive', font:'Lucida Handwriting'}}>Family Guy</Typography>
                    <img src={familyGuy} height={'250px'} width={"300px"} style={{paddingLeft:'17px'}}/>
                </Paper>
            </Grid>
            <Grid item xs={4} style={{padding:'50px'}}>
                <Paper>
                    <Typography style={{paddingLeft:"100px", fontFamily:'cursive', font:'Lucida Handwriting'}}>Parks and Recreation</Typography>
                    <img src={parksNrec} height={'250px'} width={"300px"} style={{paddingLeft:'17px'}}/>
                </Paper>
            </Grid>
        </Grid>
    );
}
export default TvShows;