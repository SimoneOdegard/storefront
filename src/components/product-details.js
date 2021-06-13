import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { activeCat, reset } from '../store/products.js';
import { increment, add, remove } from '../store/simple-cart.js';
import * as actions from '../store/api-actions.js';

const useStyles = makeStyles({
  root: {
    maxWidth: 700,
    margin: '0 auto',
  },
  media: {
    height: 400,
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

function ProductDetails(props) {

  const classes = useStyles();
  console.log('finding something', props.location.state);
  let selectedProduct = props.location.state;
  return (
    <>
      <Container>
        <Card id="cartCardProducts" className={classes.cart}>
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
                      <Button onClick={() => props.remove(product)} size="small">Remove</Button>
                    </CardActions>
                  </>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </Container>
      <Container id="productDetails" className={classes.root}>
        <h2 id="productDetailsTitle">{selectedProduct.name}</h2>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={selectedProduct.image}
              title={selectedProduct.name}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                In stock: {selectedProduct.inventoryCount}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {selectedProduct.price}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {selectedProduct.description}
          </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Button 
        onClick={() => props.add(selectedProduct)}
        className={classes.button} size="large" color="light"
        >
              BUY
        </Button>
      </Container>
    </>
  )
}

const mapStateToProps = state => ({
  catReducer: state.catReducer,
  cartReducer: state.cartReducer,
  apiReducer: state.apiReducer
});

const mapDispatchToProps = (dispatch, getState) => ({
  get: () => dispatch(actions.getRemoteData()),
  add: (product) => dispatch(add(product)),
  reset: () => dispatch(reset()),
  remove: (product) => dispatch(remove(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);