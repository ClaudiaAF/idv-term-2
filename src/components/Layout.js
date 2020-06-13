import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardsLong from './CardsLong';
import CardsSmall from './CardsSmall';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: 'center',
  },

  
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <CardsLong textAlign= 'center'/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CardsSmall />
        </Grid>
        <Grid item xs={12} sm={6}>
        <CardsSmall />
        </Grid>
      </Grid>
    </div>
  );
}
