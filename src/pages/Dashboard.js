import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// MUI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// Components
import Logout from '../components/Logout';

const useStyles = makeStyles((theme) => ({
  dashboardPage: theme.spreadThis.dashboardPage,
}));

export default function Dashboard() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      className={classes.dashboardPage}
    >
      <Grid item>
        <Typography variant='h3' color='primary'>
          Dashboard
        </Typography>
        <Logout />
      </Grid>
    </Grid>
  );
}
