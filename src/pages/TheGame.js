import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextLoop from 'react-text-loop';

// MUI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  theGamePage: theme.spreadThis.theGamePage,
}));

export default function TheGame() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      className={classes.theGamePage}
    >
      <Grid item>
        <Grid container direction='column' justify='center' alignItems='center'>
          <Grid item>
            <Typography variant='h2' color='primary' align='center'>
              Hey boys, guess what!
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='h2' color='secondary'>
              <TextLoop
                interval={500}
                springConfig={{ stiffness: 180, damping: 3 }}
                children={['You', 'Just', 'Lost', 'The', 'Game']}
              ></TextLoop>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
