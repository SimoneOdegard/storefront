import React from 'react';
import { connect } from 'react-redux';

import { activeCat, reset } from '../store/categories.js';

const VotesCounter = props => {
 return (
   <section>
     <ul>
       {props.activeCat.categories.map(category => {
         return <li onClick={() => props.activeCat(category.name)} key={category.name}>{category.name}</li>
       })}
     </ul>
   </section>
 ) 
}

const mapStateToProps = state => ({
  activeCat: state.voteCounter
})

const mapDispatchToProps = { activeCat, reset }

export default connect(mapStateToProps, mapDispatchToProps)(VotesCounter);