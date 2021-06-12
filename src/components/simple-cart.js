import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import { activeCat, reset } from '../store/products.js';
import { increment, add, remove } from '../store/simple-cart.js';

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    position: 'fixed',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function SimpleCart(props) {

  const classes = useStyles();

  return (
    <>
      <Card id="cartCard" className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Cart
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
                    <Button size="small" onClick={() => props.remove(product)}>Remove</Button>
                  </CardActions>
                </>
              )
            })}
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);