import {Grid, Paper, Typography} from '@mui/material'

import catch22 from "./catch22.jpg"
import catcher from "./catcherRye.jpg"
import huckFinn from "./huckleberryFinn.jpg"
import lotr from "./lotr.jpg"
import mockingBird from "./mockingBird.jpg"
import theGG from "./theGG.jpg"

function Books() {
    return (
        <Grid container>
            <Grid item xs={4} style={{padding:'50px'}}>
                <Paper>
                    <Typography style={{paddingLeft:"105px", fontFamily:'cursive', font:'Lucida Handwriting'}}>The Great Gatsby</Typography>
                    <img src={theGG} height={'250px'} width={"200px"} style={{paddingLeft:'75px'}}/>
                </Paper>
            </Grid>
            <Grid item xs={4} style={{padding:'50px'}}>
                <Paper>
                    <Typography style={{paddingLeft:"110px", fontFamily:'cursive', font:'Lucida Handwriting'}}>The Adventures of Huckleberry Finn</Typography>
                    <img src={huckFinn} height={'250px'} width={"200px"} style={{paddingLeft:'75px'}}/>
                </Paper>
            </Grid>
            <Grid item xs={4} style={{padding:'50px'}}>
                <Paper>
                    <Typography style={{paddingLeft:"95px", fontFamily:'cursive', font:'Lucida Handwriting'}}>To Kill a Mockingbird</Typography>
                    <img src={mockingBird} height={'250px'} width={"200px"} style={{paddingLeft:'75px'}}/>
                </Paper>
            </Grid>
            <Grid item xs={4} style={{padding:'50px'}}>
                <Paper>
                    <Typography style={{paddingLeft:"95px", fontFamily:'cursive', font:'Lucida Handwriting'}}>The Catcher in the Rye</Typography>
                    <img src={catcher} height={'250px'} width={"200px"} style={{paddingLeft:'75px'}}/>
                </Paper>
            </Grid>
            <Grid item xs={4} style={{padding:'50px'}}>
                <Paper>
                    <Typography style={{paddingLeft:"125px", fontFamily:'cursive', font:'Lucida Handwriting'}}>Catch-22</Typography>
                    <img src={catch22} height={'250px'} width={"200px"} style={{paddingLeft:'75px'}}/>
                </Paper>
            </Grid>
            <Grid item xs={4} style={{padding:'50px'}}>
                <Paper>
                    <Typography style={{paddingLeft:"95px", fontFamily:'cursive', font:'Lucida Handwriting'}}>The Lord of the Rings</Typography>
                    <img src={lotr} height={'250px'} width={"200px"} style={{paddingLeft:'75px'}}/>
                </Paper>
            </Grid>
        </Grid>
    );
}
export default Books;