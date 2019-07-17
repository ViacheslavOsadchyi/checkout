import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import PaymentDetailsSteps from '../PaymentDetailsSteps';
import componentStyles from './styles';

class PaymentSelection extends Component {
    render() {
      const {
        classes,
        selectedMethodId,
        selectedAccountId,
        selectPaymentHandler,
        paymentMethods,
      } = this.props;

      return (
        <div className="paymentSelection">
          <Grid container direction="column">
            <Grid item>
              <PaymentDetailsSteps currentStep={'methods'} />
            </Grid>
            <Grid item>
              {Object.keys(paymentMethods).map(id => {
                const methodData = paymentMethods[id];

                return (
                  <ListItem key={id} role={undefined} onClick={e => selectPaymentHandler(id)} dense button>
                    <ListItemIcon>
                      <Checkbox
                          edge="start"
                          checked={selectedMethodId === id}
                          tabIndex={-1}
                          disableRipple
                      />
                    </ListItemIcon>
                    <ListItemText primary={methodData.label} />
                  </ListItem>
                );
              })}
            </Grid>
            <Grid item className={classes.actionButtons}>
              <Grid container justify="space-between" alignItems="center">
                <Grid item>
                  <Button component={Link} to="/">
                    <KeyboardBackspaceIcon className={classes.buttonIcon} />
                    Return to customer account
                  </Button>
                </Grid>
                <Grid item>
                  <Button component={Link} disabled={selectedMethodId === null || selectedAccountId === null} to="/checkout" variant="contained" size="large" color="primary">
                    complete order
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      );
    }
  }
  
  export default withStyles(componentStyles)(PaymentSelection);