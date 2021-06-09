import React from 'react';
import { connect } from 'react-redux';

import { activeCat, reset } from '../store/products.js';
import { increment, add } from '../store/simple-cart.js';

function SimpleCart(props) {
  return (
    <>
      <h3>Cart</h3>
      <div>
        {props.cartReducer.cartItems.map(product => {
          return (
            <ul>
              Name: {product.name}, Price: {product.price}
            </ul>
          )
        })}
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  catReducer: state.catReducer,
  prodReducer: state.prodReducer,
  cartReducer: state.cartReducer
})

const mapDispatchToProps = { activeCat, reset, increment, add }

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);