import {Grid, Paper, Typography} from '@mui/material'

import facebook from "./facebook.jpg"
import insta from "./insta.jpg"
import twitter from "./twitter.jpg"
import tiktok from "./tiktok.jpg"
import youtube from "./youtube.jpg"
import reddit from "./reddit.jpg"

function SocialMedia() {
    return (
        <Grid container>
            <Grid item xs={4} style={{padding:'50px'}}>
                <Paper>
                    <Typography style={{paddingLeft:"125px", fontFamily:'cursive', font:'Lucida Handwriting'}}>Facebook</Typography>
                    <img src={facebook} height={'250px'} width={"300px"} style={{paddingLeft:'17px'}}/>
                </Paper>
            </Grid>
            <Grid item xs={4} style={{padding:'50px'}}>
                <Paper>
                    <Typography style={{paddingLeft:"125px", fontFamily:'cursive', font:'Lucida Handwriting'}}>Instagram</Typography>
                    <img src={insta} height={'250px'} width={"300px"} style={{paddingLeft:'17px'}}/>
                </Paper>
            </Grid>
            <Grid item xs={4} style={{padding:'50px'}}>
                <Paper>
                    <Typography style={{paddingLeft:"125px", fontFamily:'cursive', font:'Lucida Handwriting'}}>Twitter</Typography>
                    <img src={twitter} height={'250px'} width={"300px"} style={{paddingLeft:'17px'}}/>
                </Paper>
            </Grid>
            <Grid item xs={4} style={{padding:'50px'}}>
                <Paper>
                    <Typography style={{paddingLeft:"125px", fontFamily:'cursive', font:'Lucida Handwriting'}}>TikTok</Typography>
                    <img src={tiktok} height={'250px'} width={"300px"} style={{paddingLeft:'17px'}}/>
                </Paper>
            </Grid>
            <Grid item xs={4} style={{padding:'50px'}}>
                <Paper>
                    <Typography style={{paddingLeft:"125px", fontFamily:'cursive', font:'Lucida Handwriting'}}>Youtube</Typography>
                    <img src={youtube} height={'250px'} width={"300px"} style={{paddingLeft:'17px'}}/>
                </Paper>
            </Grid>
            <Grid item xs={4} style={{padding:'50px'}}>
                <Paper>
                    <Typography style={{paddingLeft:"125px", fontFamily:'cursive', font:'Lucida Handwriting'}}>Reddit</Typography>
                    <img src={reddit} height={'250px'} width={"300px"} style={{paddingLeft:'17px'}}/>
                </Paper>
            </Grid>
        </Grid>
    );
}
export default SocialMedia;