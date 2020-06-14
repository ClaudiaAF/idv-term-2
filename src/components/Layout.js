import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardsLong from './CardsLong';
import CardsSmall from './CardsSmall';
import CardsSmallRight from './CardsSmallRight';
import Info from './Info';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }  
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <CardsLong textAlign= 'center'>
          </CardsLong>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CardsSmall />
        </Grid>
        <Grid item xs={12} sm={6}>
        <CardsSmallRight />
        </Grid>
      </Grid>
    </div>
  );
}
