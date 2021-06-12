import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { add, reset } from '../store/simple-cart.js';
import * as actions from '../store/api-actions.js';

const useStyles = makeStyles(theme => ({
  root: {
    margin: 10,
    display: 'inline-block',
    maxWidth: 300,
    flexGrow: 1,
    padding: theme.spacing(2)
  },
}));

const ActiveProduct = props => {

  const fetchData = (e) => {
    e && e.preventDefault();
    props.get();
  }

  useEffect(() => {
    fetchData();
  }, []);

  const classes = useStyles();
  return (
    <section>
      <Container maxWidth="md" component="main">
        <ul>
          {props.apiReducer.results.map(product => {
            if (product.category === props.catReducer.activeCategory)
              return (
                < Card className={classes.root} >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt={product.name}
                      height="140"
                      image={product.image}
                      title={product.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {product.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {product.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      onClick={() => props.add(product)}
                      size="small" color="primary">
                      ADD TO CART
                    </Button>
                    <Button size="small" color="primary">
                      VIEW DETAILS
                    </Button>
                  </CardActions>
                </Card>
              )
          })}
        </ul>
      </Container>
    </section >
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
  reset: () => dispatch(reset())
});

export default connect(mapStateToProps, mapDispatchToProps)(ActiveProduct);