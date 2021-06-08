import React from 'react';
import { connect } from 'react-redux';

import { activeCat, reset } from '../store/products.js';

const ActiveProduct = props => {
 return (
   <section>
     <h1 id="product">Products</h1>
     <ul>
       {props.prodReducer.products.map(product => {
         if (product.category === props.catReducer.activeCategory)
         return ( <li>{product.name}</li> )
       })}
     </ul>
   </section>
 ) 
}

const mapStateToProps = state => ({
  catReducer: state.catReducer,
  prodReducer: state.prodReducer
})

const mapDispatchToProps = { activeCat, reset }

export default connect(mapStateToProps, mapDispatchToProps)(ActiveProduct);