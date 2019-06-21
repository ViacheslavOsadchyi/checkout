import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
// import PaymentDetailsX from "../containers/PaymentDetailsX";
import PaymentDetailsX from "../containers/PaymentDetailsX";
import AddAccountModalX from "../containers/AddAccountModalX";


const styles = theme => ({
  paymentDetailsWrapper: {
    flex: "1 0 auto",
  },
  cartWrapper: {
    flex: "0 1 400px",
    backgroundColor: "#eceff1",
  },
});

class PaymentCreator extends Component {
    render() {
      const {
        classes,
      } = this.props;
      return (
        <div className="paymentCreator">
          <Grid container>
            <Grid item className={classes.paymentDetailsWrapper}>
              <PaymentDetailsX />
            </Grid>
            {/* <Grid item className={classes.cartWrapper}>
              <Button variant="contained" color="primary">
                Hello World
              </Button>
            </Grid> */}
          </Grid>
          <AddAccountModalX />
        </div>
      );
    }
  }
  
  export default withStyles(styles)(PaymentCreator);