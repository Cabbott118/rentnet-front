import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// MUI
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// Components & Pages
import Nav from './components/Nav';
import Home from './pages/Home';

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
            <Route exact path='/about-us' component={Home} />
            <Route exact path='/blog' component={Home} />
            <Route exact path='/contact' component={Home} />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}
