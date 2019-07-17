import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import AddAccountModalX from "../containers/AddAccountModalX";
import EditAccountModalX from "../containers/EditAccountModalX";
import DeleteAccountConfirmationModalX from "../containers/DeleteAccountConfirmationModalX";
import CustomerAccountsX from '../containers/CustomerAccountsX';
import PaymentSelectionX from '../containers/PaymentSelectionX';
import OrderCompleted from './OrderCompleted';
import DetailedCartX from '../containers/DetailedCartX';


const styles = theme => ({
  rootGrid: {
    flexWrap: 'nowrap',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
    },
  },
  paymentDetailsWrapper: {
    flex: "0 1 100%",
    paddingRight: "50px",
    [theme.breakpoints.down('sm')]: {
      paddingRight: 0,
    },
  },
  cartWrapper: {
    flex: "1 0 400px",
    backgroundColor: "#eceff1",
    padding: '20px',
    [theme.breakpoints.down('md')]: {
      flex: "1 0 320px",
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: 50,
    },
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
                <Route path="/checkout" component={OrderCompleted} />
              </Router>
            </Grid>
            <Grid item className={classes.cartWrapper}>
              <DetailedCartX />
            </Grid>
          </Grid>
          <AddAccountModalX />
          <EditAccountModalX />
          <DeleteAccountConfirmationModalX />
        </div>
      );
    }
  }
  
  export default withStyles(styles)(PaymentCreator);