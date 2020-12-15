import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// MUI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  homePage: theme.spreadThis.homePage,
}));

export default function Home() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      className={classes.homePage}
    >
      <Grid item>
        <Typography variant='h1' color='primary' align='center'>
          Home
        </Typography>
        <Typography variant='body1' color='primary' align='center'>
          This is a React-MUI template created by Caleb Abbott.
        </Typography>
        <Typography variant='body1' color='primary' align='center'>
          Coming Soon - Redux implementation with User auth and UI loading
          state.
        </Typography>
      </Grid>
    </Grid>
  );
}
