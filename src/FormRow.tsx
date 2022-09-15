import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Icons } from './Icon';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const icon = JSON.parse(JSON.stringify(Icons));


function FormRow() {

   const classes = useStyles();

  <></>
  const iValue = Object.keys(icon).map((el, id) => (
    <Grid key={id} item xs={1}>
    <Paper className={classes.paper}>
      
      <svg>
        <path d = {icon[el]} />
      </svg>
    </Paper>
    </Grid>
   ));
   
   

    return (
      <React.Fragment>
        {iValue}
      </React.Fragment>
    );
  }

export default FormRow;

