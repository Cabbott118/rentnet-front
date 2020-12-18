import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/userActions';

// MUI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  loginPage: theme.spreadThis.loginPage,
  formGridItem: theme.spreadThis.formGridItem,
  textFields: theme.spreadThis.textFields,
}));

export default function Login() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const { email, password } = inputs;

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  }

  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      className={classes.loginPage}
    >
      <Grid item>
        <Typography variant='h3'>Login</Typography>
        <form noValidate onSubmit={handleSubmit}>
          <TextField
            id='email'
            name='email'
            type='email'
            label='Email'
            value={email}
            onChange={handleChange}
            className={classes.textFields}
            fullWidth
          />
          <TextField
            id='password'
            name='password'
            type='password'
            label='Password'
            value={password}
            onChange={handleChange}
            className={classes.textFields}
            fullWidth
          />
          <Button type='submit' variant='contained' color='primary'>
            Login
          </Button>
          <small>
            Don't have an account? Register <Link to='/register'>here!</Link>
          </small>
        </form>
      </Grid>
    </Grid>
  );
}
