import React from 'react';
import { withStyles } from '@material-ui/core';

// MUI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  ...theme.spreadThis,
});

function Home({ classes }) {
  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      className={classes.homePage}
    >
      <Grid item>
        <Typography variant='h1' color='secondary'>
          Home
        </Typography>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Home);
