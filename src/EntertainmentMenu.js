import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Movies from './EntertainmentCatagories/Movies/Movies'
import TvShows from './EntertainmentCatagories/TvShows/TvShows'
import Games from './EntertainmentCatagories/Games/Games'
import Books from './EntertainmentCatagories/Books/Books'
import AudioBooks from './EntertainmentCatagories/AudioBooks/AudioBooks'
import SocialMedia from './EntertainmentCatagories/SocialMedia/SocialMedia'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `tab-${index}`,
        'aria-controls': `tabpanel-${index}`,
    };
}

function EntertainmentMenu() {

    const [moviesSelected, setMoviesSelected] = useState(false);
    const selectMovieHandler = () => {
        setMoviesSelected(true);
        console.log('click');
    }

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs" style={{paddingLeft:'250px'}}>
                    <Tab label="Movies" {...a11yProps(0)} style={{fontSize:'1.1em', padding:'25px'}} />
                    <Tab label="TV Shows" {...a11yProps(1)} style={{fontSize:'1.1em', padding:'25px'}} />
                    <Tab label="Games" {...a11yProps(2)} style={{fontSize:'1.1em', padding:'25px'}} />
                    <Tab label="Book" {...a11yProps(3)} style={{fontSize:'1.1em', padding:'25px'}} />
                    <Tab label="Audio Book" {...a11yProps(4)} style={{fontSize:'1.1em', padding:'25px'}} />
                    <Tab label="Social Media" {...a11yProps(5)} style={{fontSize:'1.1em', padding:'25px'}} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Movies/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <TvShows/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Games/>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Books/>
            </TabPanel>
            <TabPanel value={value} index={4}>
                <AudioBooks/>
            </TabPanel>
            <TabPanel value={value} index={5}>
                <SocialMedia/>
            </TabPanel>
        </Box>
    );
}

export default EntertainmentMenu