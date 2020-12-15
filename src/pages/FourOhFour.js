import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// MUI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  fourOhFourPage: theme.spreadThis.fourOhFourPage,
}));

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
        <Typography variant='h2' color='primary'>
          Oops! Nothing to see here!
        </Typography>
      </Grid>
    </Grid>
  );
}
