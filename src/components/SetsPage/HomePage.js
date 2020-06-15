import React, { Fragment } from 'react';
import Hearthstone from './hearthstone.png';
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    
    marginAutoItem: {
      margin: 'auto'
    },
}))

const HomePage = () =>  {
    return (
        <Fragment>
        <Box m="auto"
        display="flex"  
        width={400} height={250}
      >  
      <img src={Hearthstone} />

     </Box>
        <div>
            <h1 style={{marginLeft: 986, color:'white'}}>WELCOME</h1>
            <p style={{marginLeft: 550, color:'white', textAlign: 'center', maxWidth: 1000, fontSize:"16pt"}}>Welcome to a page dedicated to presenting card information about the online card game Hearthstone.
            Hearthstone is set in the Warcraft universe, with the vast majority of characters, spells, weapons and locations drawn from World of Warcraft or earlier games. 
            <br />
            <br />
            Each tab on the left hand side represents certain categories about the cards, within each category are charts and graphs representing how many cards that specifc category contains - displaying the rarity or lack of for those cards            
            <br />
            </p>

            <h2 style={{marginLeft: 550, color:'white', textAlign: 'center', maxWidth: 1000, fontSize:"18pt"}}>Feel free to explore through each category, and discover what the wolrd of Hearthstone has to offer.</h2>
        </div>
      </Fragment>
    );
  }



export default HomePage;