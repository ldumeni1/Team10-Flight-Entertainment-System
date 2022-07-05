import {Grid, Paper, Typography} from '@mui/material'

import harryPotter from "./harryPotter.jpg"
import help from "./theHelp.jpg"
import hhgg from "./hhgg.jpg"
import hobbit from "./hobbit.jpg"
import hungerGames from "./hungerGames.jpg"
import unbroken from "./unbroken.jpg"

function AudioBooks() {
    return (
        <Grid container>
            <Grid item xs={4} style={{padding:'50px'}}>
                <Paper>
                    <Typography style={{paddingLeft:"105px", fontFamily:'cursive', font:'Lucida Handwriting'}}>Harry Potter Series</Typography>
                    <img src={harryPotter} height={'250px'} width={"200px"} style={{paddingLeft:'75px'}}/>
                </Paper>
            </Grid>
            <Grid item xs={4} style={{padding:'50px'}}>
                <Paper>
                    <Typography style={{paddingLeft:"135px", fontFamily:'cursive', font:'Lucida Handwriting'}}>The Help</Typography>
                    <img src={help} height={'250px'} width={"200px"} style={{paddingLeft:'75px'}}/>
                </Paper>
            </Grid>
            <Grid item xs={4} style={{padding:'50px'}}>
                <Paper>
                    <Typography style={{paddingLeft:"30px", fontFamily:'cursive', font:'Lucida Handwriting'}}>The Hitchhicker's Guide to the Galaxy</Typography>
                    <img src={hhgg} height={'250px'} width={"200px"} style={{paddingLeft:'75px'}}/>
                </Paper>
            </Grid>
            <Grid item xs={4} style={{padding:'50px'}}>
                <Paper>
                    <Typography style={{paddingLeft:"125px", fontFamily:'cursive', font:'Lucida Handwriting'}}>The Hobbit</Typography>
                    <img src={hobbit} height={'250px'} width={"200px"} style={{paddingLeft:'75px'}}/>
                </Paper>
            </Grid>
            <Grid item xs={4} style={{padding:'50px'}}>
                <Paper>
                    <Typography style={{paddingLeft:"105px", fontFamily:'cursive', font:'Lucida Handwriting'}}>The Hunger Games</Typography>
                    <img src={hungerGames} height={'250px'} width={"200px"} style={{paddingLeft:'75px'}}/>
                </Paper>
            </Grid>
            <Grid item xs={4} style={{padding:'50px'}}>
                <Paper>
                    <Typography style={{paddingLeft:"135px", fontFamily:'cursive', font:'Lucida Handwriting'}}>Unbroken</Typography>
                    <img src={unbroken} height={'250px'} width={"200px"} style={{paddingLeft:'75px'}}/>
                </Paper>
            </Grid>
        </Grid>
    );
}
export default AudioBooks;