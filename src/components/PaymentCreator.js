import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import AddAccountModalX from "../containers/AddAccountModalX";
import EditAccountModalX from "../containers/EditAccountModalX";
import CustomerAccountsX from '../containers/CustomerAccountsX';
import PaymentSelectionX from '../containers/PaymentSelectionX';


const styles = theme => ({
  rootGrid: {
    flexWrap: 'nowrap',
  },
  paymentDetailsWrapper: {
    flex: "0 1 100%",
  },
  cartWrapper: {
    flex: "1 0 400px",
    backgroundColor: "#eceff1",
    padding: '20px',
  },
});

class PaymentCreator extends Component {
    render() {
      const {
        classes,
      } = this.props;
      return (
        <div className="paymentCreator">
          <Grid container className={classes.rootGrid}>
            <Grid item className={classes.paymentDetailsWrapper}>
              <Router>
                <Route path="/" exact component={CustomerAccountsX} />
                <Route path="/methods" component={PaymentSelectionX} />
              </Router>
            </Grid>
            <Grid item className={classes.cartWrapper}>
              <h2>
                Cart
              </h2>
            </Grid>
          </Grid>
          <AddAccountModalX />
          <EditAccountModalX />
        </div>
      );
    }
  }
  
  export default withStyles(styles)(PaymentCreator);