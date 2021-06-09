import React from 'react';
import { connect } from 'react-redux';

import { activeCat, reset } from '../store/products.js';
import { increment } from '../store/simple-cart.js';

function SimpleCart(props) {
  return (
    <>
      <p>{props.cartReducer.cartTotal}</p>
    </>
  )
}

const mapStateToProps = state => ({
  catReducer: state.catReducer,
  prodReducer: state.prodReducer,
  cartReducer: state.cartReducer
})

const mapDispatchToProps = { activeCat, reset, increment }

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);