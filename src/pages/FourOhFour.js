import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextLoop from 'react-text-loop';

// MUI
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  fourOhFourPage: theme.spreadThis.fourOhFourPage,
  button: theme.spreadThis.button,
}));

function onClick() {
  window.location.replace('/');
}

export default function FourOhFour() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      className={classes.fourOhFourPage}
    >
      <Grid item>
        <Typography variant='h1' color='primary' align='center'>
          Error Code: 404
        </Typography>
        <Grid
          container
          spacing={2}
          direction='row'
          justify='center'
          alignItems='center'
        >
          <Grid item>
            <Typography variant='h2' color='secondary'>
              <TextLoop
                interval={1000}
                springConfig={{ stiffness: 180, damping: 3 }}
                children={['Page', '']}
              ></TextLoop>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='h2' color='secondary'>
              <TextLoop
                interval={1000}
                springConfig={{ stiffness: 180, damping: 3 }}
                children={['Not', '']}
              ></TextLoop>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='h2' color='secondary'>
              <TextLoop
                interval={1000}
                springConfig={{ stiffness: 180, damping: 3 }}
                children={['Found', '']}
              ></TextLoop>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button
          variant='outlined'
          color='secondary'
          onClick={onClick}
          fullwidth
          style={{ marginTop: '10px' }}
          className={classes.button}
        >
          Home
        </Button>
      </Grid>
    </Grid>
  );
}
