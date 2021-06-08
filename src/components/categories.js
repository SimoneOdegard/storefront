import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { activeCat, reset } from '../store/categories.js';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const ActiveCategory = props => {
  const classes = useStyles();
 return (
   <section>
     <h1 id="category">Browse our Categories</h1>
     <ul>
       {props.catReducer.categories.map(category => {
         return <Button color="primary" onClick={() => props.activeCat(category.name)} key={category.name}>
         {category.name}
       </Button>
       })}
     </ul>
     <h2 id="activeCategory">{props.catReducer.activeCategory}</h2>
   </section>
 ) 
}

const mapStateToProps = state => ({
  catReducer: state.catReducer
})

const mapDispatchToProps = { activeCat, reset }

export default connect(mapStateToProps, mapDispatchToProps)(ActiveCategory);