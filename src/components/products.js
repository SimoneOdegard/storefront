import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { activeCat, reset } from '../store/products.js';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    flexGrow: 1,
    padding: theme.spacing(2)
  },
}));

const ActiveProduct = props => {
  const classes = useStyles();
  return (
    <section>
      <ul>
        {props.prodReducer.products.map(product => {
          if (product.category === props.catReducer.activeCategory)
            return (
              <>
              <Container maxWidth="md" component="main">
                <Grid container spacing={2} direction="row" justify="flex-start" alignItems="flex-start">
                  <Grid item xs={12} spacing={3}>
                    <Card className={classes.root}>
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
                        <Button size="small" color="primary">
                          ADD TO CART
                    </Button>
                        <Button size="small" color="primary">
                          VIEW DETAILS
                    </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                </Grid>
                </Container>
              </>
            )
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