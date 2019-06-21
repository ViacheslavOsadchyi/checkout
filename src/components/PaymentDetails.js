import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';
import CustomerAccountsX from '../containers/CustomerAccountsX';

const styles = theme => ({
});

class PaymentDetails extends Component {
    render() {
      const {
        classes,  
        tabChangeHandler,
        activeTab,
      } = this.props;

      let paymentDetailsContent = "hello";

      switch (activeTab) {
        case "accounts":
            paymentDetailsContent = <CustomerAccountsX />;
            break;
        case "methods":
            paymentDetailsContent = <h2>Payment Selection</h2>;
            break;
      }

      return (
        <div className="paymentDetails">
          <Grid container direction="column">
            <Grid item>
              <Tabs
                value={activeTab}
                onChange={(e, value)=>{
                  tabChangeHandler(value);
                }}
              >
                <Tab
                    disableRipple
                    value="accounts"
                    label="01 CUSTOMER ACCOUNT"
                />
                <Tab
                    disableRipple
                    value="methods"
                    label="02 PAYMENT SELECTION"
                />
              </Tabs>
            </Grid>
            <Grid item>
                {paymentDetailsContent}
            </Grid>
          </Grid>
        </div>
      );
    }
  }
  
  export default withStyles(styles)(PaymentDetails);