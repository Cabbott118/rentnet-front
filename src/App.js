import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

// MUI
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// Components & Pages
import Nav from './components/Nav';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import FourOhFour from './pages/FourOhFour';
import BillGo from './pages/BillGo';
import TheGame from './pages/TheGame';

// Utility
import themeFile from './util/theme';

const theme = createMuiTheme(themeFile);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Router>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about-me' component={AboutMe} />
            <Route exact path='/blog' component={Blog} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/bill-go' component={BillGo} />
            <Route exact path='/the-game' component={TheGame} />
            <Route path='/404' component={FourOhFour} />
            <Redirect to='/404' />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}
