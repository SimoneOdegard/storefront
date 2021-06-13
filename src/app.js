import React from 'react';
import { connect } from 'react-redux';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Categories from './components/categories.js';
import Products from './components/products.js';
import ProductDetails from './components/product-details.js';
import './components/styles/style.scss';
import SimpleCart from './components/simple-cart.js';
import ShoppingCart from './components/shopping-cart.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App(props) {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path ="/">
            <SimpleCart />
            <Categories />
            <Products />
          </Route>
          <Route 
          exact path ={`/details/:${props.prodReducer._id}`}
          component={(props) => <ProductDetails {...props} />}
          >
          </Route>
          <Route exact path ="/cart">
            <ShoppingCart />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  )
}

const mapStateToProps = state => ({
  prodReducer: state.prodReducer,
  catReducer: state.catReducer,
  cartReducer: state.cartReducer,
  apiReducer: state.apiReducer
});

const mapDispatchToProps = (dispatch, getState) => ({
  get: () => dispatch(actions.getRemoteData()),
  add: (product) => dispatch(add(product)),
  reset: () => dispatch(reset())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);