import React, { useState, useEffect } from 'react';
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
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import FourOhFour from './pages/FourOhFour';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './redux/actions/userActions';

// Utility
import themeFile from './util/theme';

const theme = createMuiTheme(themeFile);

export default function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  // const [authObj, setAuthObj] = useState(null);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  // useEffect(() => {
  //   setAuthObj(auth);
  // }, [auth]);

  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Router>
          <Nav auth={auth} />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route path='/404' component={FourOhFour} />
            <Redirect to='/404' />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}
