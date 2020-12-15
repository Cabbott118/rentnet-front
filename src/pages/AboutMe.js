import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// MUI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  aboutMePage: theme.spreadThis.aboutMePage,
  aboutMeBox: {
    width: '100vw',
    height: '300px',
    // background: '#0e2133',
    background: `url('/images/img-7.jpg') center center/cover no-repeat`,
    boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.5)',
  },
}));

export default function AboutMe() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction='column'
      justify='flex-start'
      alignItems='center'
      className={classes.aboutMePage}
    >
      <Grid item>
        <Grid
          container
          direction='column'
          justify='center'
          alignItems='center'
          className={classes.aboutMeBox}
        >
          <Grid item>
            <Typography variant='h2' color='primary'>
              About Me
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
