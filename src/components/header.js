import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { add } from '../store/simple-cart.js';
import { Link, NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: theme.palette.white,
    color: theme.palette.black,
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.black,
  }
}))

function Header(props) {

  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          OUR STORE
          </Typography>
          <Button color="inherit"><NavLink className={classes.link} to="/">HOME</NavLink></Button>
          <Button id="cartButton" color="inherit"><NavLink className={classes.link} to="/cart">CART ({props.cartReducer.cartItems.length})</NavLink></Button>
        </Toolbar>
      </AppBar>
    </>
  )
}

const mapStateToProps = state => ({
  cartReducer: state.cartReducer
})

const mapDispatchToProps = { add }

export default connect(mapStateToProps, mapDispatchToProps)(Header);