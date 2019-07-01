import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import FeesDescriptionX from '../../containers/FeesDescriptionX';

const styles = theme => ({
    cartTitleSection: {
        marginBottom: '30px',
    },
    cartTitle: {
        paddingBottom: '10px',
    },
    cartTitleHeader: {
        fontSize: '24px',
    },
    itemsCountBadge: {
        minWidth: '30px',
        lineHeight: '30px',
        backgroundColor: theme.palette.primary.main,
        borderRadius: '100%',
        color: '#fff',
        textAlign: 'center',
    },
    cartItems: {
        marginBottom: '30px',
    },
    cartItem: {
        marginBottom: '20px',
    },
    cartItemTitle: {
        fontSize: '1em',
        fontWeight: 'inherit',
        margin: 'auto',
    },
    cartItemSubtitle: {
        color: theme.palette.grey['600'],
        margin: '5px 0',
    },
    cartItemPrice: {
        color: theme.palette.grey['600'],
        fontWeight: '700',
        margin: '10px 0 0'
    }
})

class CustomerAccount extends Component {
    render() {
      const {
        classes,
        itemsCount,
        cartItems,
        subtotal,
        total,
      } = this.props;

      return (
        <div>
            <section className={classes.cartTitleSection}>
                <Grid container className={classes.cartTitle} alignItems="center">
                    <Grid item xs>
                        <Typography className={classes.cartTitleHeader} variant="h4">
                        Shopping Cart
                        </Typography>
                    </Grid>
                    <Grid item>
                        <div className={classes.itemsCountBadge}>{itemsCount}</div>
                    </Grid>
                </Grid>
                <Divider />
            </section>
            <section className={classes.cartDetails}>
                <div className={classes.cartItems}>
                    {cartItems.map(item => {
                        return (
                            <div key={item.id} className={classes.cartItem}>
                                <h5 className={classes.cartItemTitle}>
                                    {item.title}
                                </h5>
                                <p className={classes.cartItemSubtitle}>
                                    {item.subtitle}
                                </p>
                                <p className={classes.cartItemPrice}>
                                    $ {item.price}
                                </p>
                            </div>
                        );
                    })}
                </div>
                <Divider />
                <h4>Subtotal: {subtotal}</h4>
                <FeesDescriptionX />
                <h4>Total: {total}</h4>
            </section>
        </div>
      );
    }
  }
  
  export default withStyles(styles)(CustomerAccount);