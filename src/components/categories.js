import React from 'react';
import { connect } from 'react-redux';

import { activeCat, reset } from '../store/categories.js';

const ActiveCategory = props => {
 return (
   <section>
     <h1 id="category">Browse our Categories</h1>
     <ul>
       {props.catReducer.categories.map(category => {
         return <li onClick={() => props.activeCat(category.name)} key={category.name}>{category.name}</li>
       })}
     </ul>
   </section>
 ) 
}

const mapStateToProps = state => ({
  catReducer: state.catReducer
})

const mapDispatchToProps = { activeCat, reset }

export default connect(mapStateToProps, mapDispatchToProps)(ActiveCategory);