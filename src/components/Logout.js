import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { useDispatch } from 'react-redux';
import { logout } from '../redux/actions/userActions';

// MUI
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: theme.spreadThis.button,
}));

export default function Logout() {
  const classes = useStyles();
  const dispatch = useDispatch();
  function handleLogout() {
    dispatch(logout());
  }
  return (
    <Button
      color='primary'
      variant='outlined'
      onClick={handleLogout}
      className={classes.button}
    >
      Logout
    </Button>
  );
}
