import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// MUI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  blogPage: theme.spreadThis.blogPage,
}));

export default function Blog() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      className={classes.blogPage}
    >
      <Grid item>
        <Typography variant='h1' color='primary'>
          Blog
        </Typography>
      </Grid>
    </Grid>
  );
}
