import {Grid, Paper, Typography} from '@mui/material'

import twenty48 from "./2048.png"
import angryBirds from "./angryBirds.JPG"
import candyCrush from "./candyCrush.jpg"
import cutTheRope from "./cutTherope.jpg"
import fruitNinja from "./fruitNinja.jpg"
import tetris from "./tetris.jpg"

function Games() {
    return (
        <Grid container>
            <Grid item xs={4} style={{padding:'50px'}}>
                <Paper>
                    <Typography style={{paddingLeft:"110px", fontFamily:'cursive', font:'Lucida Handwriting'}}>Fruit Ninja</Typography>
                    <img src={fruitNinja} height={'250px'} width={"300px"} style={{paddingLeft:'17px'}}/>
                </Paper>
            </Grid>
            <Grid item xs={4} style={{padding:'50px'}}>
                <Paper>
                    <Typography style={{paddingLeft:"110px", fontFamily:'cursive', font:'Lucida Handwriting'}}>Candy Crush</Typography>
                    <img src={candyCrush} height={'250px'} width={"300px"} style={{paddingLeft:'17px'}}/>
                </Paper>
            </Grid>
            <Grid item xs={4} style={{padding:'50px'}}>
                <Paper>
                    <Typography style={{paddingLeft:"145px", fontFamily:'cursive', font:'Lucida Handwriting'}}>2048</Typography>
                    <img src={twenty48} height={'250px'} width={"300px"} style={{paddingLeft:'17px'}}/>
                </Paper>
            </Grid>
            <Grid item xs={4} style={{padding:'50px'}}>
                <Paper>
                    <Typography style={{paddingLeft:"110px", fontFamily:'cursive', font:'Lucida Handwriting'}}>Cut the Rope</Typography>
                    <img src={cutTheRope} height={'250px'} width={"300px"} style={{paddingLeft:'17px'}}/>
                </Paper>
            </Grid>
            <Grid item xs={4} style={{padding:'50px'}}>
                <Paper>
                    <Typography style={{paddingLeft:"110px", fontFamily:'cursive', font:'Lucida Handwriting'}}>Angry Birds</Typography>
                    <img src={angryBirds} height={'250px'} width={"300px"} style={{paddingLeft:'17px'}}/>
                </Paper>
            </Grid>
            <Grid item xs={4} style={{padding:'50px'}}>
                <Paper>
                    <Typography style={{paddingLeft:"145px", fontFamily:'cursive', font:'Lucida Handwriting'}}>Tetris</Typography>
                    <img src={tetris} height={'250px'} width={"300px"} style={{paddingLeft:'17px'}}/>
                </Paper>
            </Grid>
        </Grid>
    );
}
export default Games;