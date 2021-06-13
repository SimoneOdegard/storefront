import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
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
    marginBottom: 12,
  },
  button: {
    width: 650,
    backgroundColor: '#9CADCE',
    color: 'white',
  },
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
                <>
                  <Typography>
                    {product.name}
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    {product.price}
                  </Typography>
                  <CardActions>
                    <Button onClick={() => props.remove(product)} size="small">Remove</Button>
                  </CardActions>
                </>
              )
            })}
          </div>
          <Typography className={classes.pos} color="textSecondary">
            Total: ${total}
          </Typography>
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