import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import feesDescription from '../feesDescription';
import componentStyles from './styles';

class DetailedCart extends Component {
    renderSummary() {
        const {
            feesDescription,
            subtotal,
            total,
            classes,
        } = this.props;

        return total === subtotal ? (
                <div className={classes.summary}>
                    <Grid container justify="space-between" className={`${classes.totalRow} ${classes.summaryRow}`}>
                        <Grid item>Total</Grid>
                        <Grid item className={classes.summaryValue}>$ {total}</Grid>
                    </Grid>
                </div>
            ) : (
                <div className={classes.summary}>
                    <Grid container justify="space-between" className={classes.summaryRow}>
                        <Grid item>Subtotal</Grid>
                        <Grid className={classes.summaryValue}>$ {subtotal}</Grid>
                    </Grid>
                    {feesDescription.map((data, i) => (
                        <Grid key={i} container justify="space-between" className={classes.summaryRow}>
                            <Grid item>{data.label}</Grid>
                            <Grid item className={classes.summaryValue}>$ {data.value}</Grid>
                        </Grid>
                    ))}
                    <Grid container justify="space-between" className={`${classes.totalRow} ${classes.summaryRow}`}>
                        <Grid item>Total</Grid>   
                        <Grid item className={classes.summaryValue}>$ {total}</Grid>
                    </Grid>   
                </div>             
            );
    }

    render() {
      const {
        classes,
        itemsCount,
        cartItems,
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
                {this.renderSummary()}
            </section>
        </div>
      );
    }
  }
  
  export default feesDescription(withStyles(componentStyles)(DetailedCart));