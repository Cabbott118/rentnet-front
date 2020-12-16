import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TextLoop from 'react-text-loop';

// MUI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  homePage: theme.spreadThis.homePage,
  scrollingText: {
    color: '#5e8d93',
  },
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
        <Typography variant='h5' color='primary' align='center'>
          This is a React-MUI template created by Caleb Abbott.
        </Typography>
        <Typography variant='h6' color='primary' align='center'>
          Coming Soon -{' '}
          <TextLoop
            className={classes.scrollingText}
            children={[
              'Redux Template',
              'User Authentication',
              'UI Loading State',
            ]}
          ></TextLoop>
        </Typography>
        <Typography variant='body1' color='primary'></Typography>
      </Grid>
    </Grid>
  );
}
