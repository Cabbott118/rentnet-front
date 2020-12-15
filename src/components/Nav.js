import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

// MUI
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Hidden from '@material-ui/core/Hidden';
import Fab from '@material-ui/core/Fab';
import Home from '@material-ui/icons/Home';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';

// Components
import Drawer from './Drawer';
import HideOnScroll from './HideOnScroll';
import BackToTop from './BackToTop';

const useStyles = makeStyles((theme) => ({
  navDisplayFlex: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  linkText: {
    textDecoration: 'none',
    textTransform: 'none',
    color: theme.palette.primary.main,
  },
}));

export default function Nav() {
  const classes = useStyles();
  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About Me', path: '/about-me' },
    { title: 'Blog', path: '/blog' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <Fragment>
      <HideOnScroll>
        <AppBar
          position='fixed'
          color='transparent'
          style={{ boxShadow: 'none' }}
        >
          <Toolbar id='back-to-top-anchor'>
            <Container maxWidth='md' className={classes.navDisplayFlex}>
              <Link to={'/'}>
                <IconButton edge='start' color='primary' aria-label='home'>
                  <Home color='primary' />
                </IconButton>
              </Link>
              <Hidden smDown>
                <List
                  component='nav'
                  aria-labelledby='main navigation'
                  className={classes.navDisplayFlex}
                >
                  {navLinks.map(({ title, path }) => (
                    <Link to={path} key={title} className={classes.linkText}>
                      <ListItem button>
                        <ListItemText primary={title} />
                      </ListItem>
                    </Link>
                  ))}
                </List>
              </Hidden>
              <Hidden mdUp>
                <Drawer navLinks={navLinks} />
              </Hidden>
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <BackToTop>
        <Fab color='primary' size='large' aria-label='scroll back to top'>
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
    </Fragment>
  );
}
