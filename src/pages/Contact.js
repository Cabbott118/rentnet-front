import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// MUI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  contactPage: theme.spreadThis.contactPage,
}));

export default function Contact() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      className={classes.contactPage}
    >
      <Grid item>
        <Typography variant='h1' color='primary'>
          Contact
        </Typography>
      </Grid>
    </Grid>
  );
}
