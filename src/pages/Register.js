import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { useDispatch } from 'react-redux';
import { register } from '../redux/actions/userActions';

// MUI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  registerPage: theme.spreadThis.registerPage,
  formGridItem: theme.spreadThis.formGridItem,
  textFields: theme.spreadThis.textFields,
}));

export default function Register() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
  });
  const { first_name, last_name, email, password, confirm_password } = inputs;

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const userData = {
      first_name,
      last_name,
      email,
      password,
      confirm_password,
    };
    dispatch(register(userData));
  }

  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      className={classes.registerPage}
    >
      <Grid item>
        <Typography variant='h3'>Register</Typography>
        <form noValidate onSubmit={handleSubmit}>
          <TextField
            id='first_name'
            name='first_name'
            type='text'
            label='First Name'
            value={first_name}
            onChange={handleChange}
            className={classes.textFields}
            fullWidth
          />
          <TextField
            id='last_name'
            name='last_name'
            type='text'
            label='Last Name'
            value={last_name}
            onChange={handleChange}
            className={classes.textFields}
            fullWidth
          />
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
          <TextField
            id='confirm_password'
            name='confirm_password'
            type='password'
            label='Confirm Password'
            value={confirm_password}
            onChange={handleChange}
            className={classes.textFields}
            fullWidth
          />
          <Button type='submit' variant='contained' color='primary'>
            Register
          </Button>
          <small>
            Have an account? Login <Link to='/login'>here!</Link>
          </small>
        </form>
      </Grid>
    </Grid>
  );
}
