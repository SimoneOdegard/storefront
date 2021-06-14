import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import { activeCat, reset } from '../store/products.js';
import { increment, add, remove } from '../store/simple-cart.js';

const useStyles = makeStyles({
  root: {
    maxWidth: 700,
    margin: '0 auto',
  },
  media: {
    height: 200,
  },
  cart: {
    maxWidth: 250,
    marginLeft: '10%',
    position: 'fixed',
    zIndex: 1000,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    padding: 10,
  },
  totalPrice: {
    fontWeight: 'bold',
    color: 'black',
  },
  button: {
    backgroundColor: '#9CADCE',
    color: 'white',
    paddingRight: 15,
    paddingLeft: 15,
  },
  checkoutButton: {
    backgroundColor: '#9CADCE',
    color: 'white',
    margin: '0 auto',
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 15,
    paddingLeft: 15,
  },
  form: {
    padding: 20,
    display: 'flex',
  }, 
  inputForm: {
    width: '50%',
  },
  inputs: {
    marginBottom: 20,
  },
  title: {
    marginBottom: 10,
  }
});

function ShoppingCart(props) {

  function totalPrice(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      let cost = parseInt(arr[i].price);
      total = total + cost;
    }
    return total;
  }

  let total = totalPrice(props.cartReducer.cartItems);
  console.log(props.cartReducer.cartItems);

  const classes = useStyles();

  return (
    <>
      <Card id="shoppingCart" className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Order Summary
          </Typography>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
          </Typography>
          <div>
            {props.cartReducer.cartItems.map(product => {
              return (
                <div className={classes.form}>
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={product.image} />
                  </ListItemAvatar>
                  <Typography className={classes.pos}>
                    {product.name} for ${product.price}
                  </Typography>
                    <Button className={classes.button} onClick={() => props.remove(product)} size="small">Remove</Button>
                </div>
              )
            })}
          </div>
          <Typography className={classes.totalPrice} color="textSecondary">
            Total: ${total}
          </Typography>

          <form className={classes.form} noValidate autoComplete="off">
            <div className={classes.inputForm}>
              <Typography className={classes.title} variant="h5" component="h2">
                Billing Address
              </Typography>
              <div className={classes.inputs}><TextField required id="standard-basic" defaultValue="Full Name" /></div>
              <div className={classes.inputs}><TextField required id="standard-basic" defaultValue="Address" /></div>
              <div className={classes.inputs}><TextField required id="standard-basic" defaultValue="City" /></div>
              <div className={classes.inputs}><TextField required id="standard-basic" defaultValue="State" /></div>
              <div className={classes.inputs}><TextField required id="standard-basic" defaultValue="Zip" /></div>
            </div>
            <div className={classes.inputForm}>
              <Typography className={classes.title} variant="h5" component="h2">
                Payment Details
              </Typography>
              <div className={classes.inputs}><TextField required id="standard-required" defaultValue="Credit Card #" /></div>
              <div className={classes.inputs}><TextField required id="standard-required" defaultValue="mm/dd/yyyy" /></div>
              <div className={classes.inputs}><TextField required id="standard-required" defaultValue="CVV" /></div>
            </div>
          </form>
          <CardActions>
            <Button className={classes.checkoutButton} size="small">PLACE YOUR ORDER</Button>
          </CardActions>
        </CardContent>
      </Card>
    </>
  )
}

const mapStateToProps = state => ({
  catReducer: state.catReducer,
  prodReducer: state.prodReducer,
  cartReducer: state.cartReducer
})

const mapDispatchToProps = { activeCat, reset, increment, add, remove }

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);