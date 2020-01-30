import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormRow from './FormRow.js';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 0,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    alignItems:"center",
    
    
  },
}));

function NestedGrid(grid) {
const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify='center' spacing={1} >

        <Grid container justify='center' item xs={12} spacing={1}>
        {FormRow(grid[0])}
        </Grid>
        <Grid container justify='center'  item xs={12} spacing={1}>
        {FormRow(grid[1])}
        </Grid>
        <Grid container justify='center' item xs={12} spacing={1}>
        {FormRow(grid[2])}
        </Grid>
        <Grid container justify='center' item xs={12} spacing={1}>
        {FormRow(grid[3])}
        </Grid>
        <Grid container justify='center' item xs={12} spacing={1}>
        {FormRow(grid[4])}
        </Grid>
      </Grid>
    </div>
  );
}

export default NestedGrid;