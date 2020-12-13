import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

// MUI
// IconButton has been declared in 'Nav'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import MuiDrawer from '@material-ui/core/Drawer';

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
    height: '100vh',
    backgroundColor: theme.palette.secondary.dark,
  },
  linkText: {
    textDecoration: 'none',
    textTransform: 'none',
    color: theme.palette.secondary.contrastText,
  },
}));

const Drawer = ({ navLinks }) => {
  const classes = useStyles();
  const [state, setState] = useState({ right: false });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ [anchor]: open });
  };

  const sideDrawerList = (anchor) => (
    <div
      className={classes.list}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List component='nav'>
        {navLinks.map(({ title, path }) => (
          <Link to={path} key={title} className={classes.linkText}>
            <ListItem button>
              <ListItemText primary={title} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <React.Fragment>
      <IconButton
        edge='start'
        aria-label='menu'
        onClick={toggleDrawer('right', true)}
      >
        <Menu color='primary' />
      </IconButton>
      <MuiDrawer
        anchor='right'
        open={state.right}
        onClose={toggleDrawer('right', false)}
      >
        {sideDrawerList('right')}
      </MuiDrawer>
    </React.Fragment>
  );
};

export default Drawer;
