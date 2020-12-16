import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// MUI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  billGoPage: theme.spreadThis.billGoPage,
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function BillGo() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      className={classes.billGoPage}
    >
      <Grid item>
        <Typography variant='h1' color='primary' align='center'>
          BillGo
        </Typography>
      </Grid>
      <Grid item>
        <CircularProgress color='secondary' size={100} />
      </Grid>
      <Grid item>
        <Typography variant='h6' color='secondary' align='center'>
          Sorry, we're experiencing some major technical difficulties. Please
          try again in 4-6 years.
        </Typography>
      </Grid>
    </Grid>
  );
}
