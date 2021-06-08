import React from 'react';
// import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: theme.palette.white,
    color: theme.palette.black,
  },
}))

function Header() {

  const classes = useStyles();

  return (
    <>
      {/* <CssBaseline /> */}
      <AppBar position="fixed" color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            OUR STORE
          </Typography>
          <Button color="inherit">CART (0)</Button>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header;