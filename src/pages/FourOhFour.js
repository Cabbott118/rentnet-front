import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
          ERROR
        </Typography>
        <Typography variant='h1' color='primary' align='center'>
          404
        </Typography>
        <Typography variant='h2' color='primary' align='center'>
          404
        </Typography>
        <Typography variant='h3' color='primary' align='center'>
          404
        </Typography>
        <Typography variant='h4' color='primary' align='center'>
          404
        </Typography>
        <Typography variant='h5' color='primary' align='center'>
          404
        </Typography>
        <Typography variant='h6' color='primary' align='center'>
          404
        </Typography>
        <Typography variant='body1' color='primary' align='center'>
          404
        </Typography>
        <Typography variant='body2' color='primary' align='center'>
          ...
        </Typography>
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
          Go Back
        </Button>
      </Grid>
    </Grid>
  );
}
