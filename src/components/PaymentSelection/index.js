import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import PaymentDetailsSteps from '../PaymentDetailsSteps';


const styles = theme => ({
});

class PaymentSelection extends Component {
    render() {
      const {
        classes,
      } = this.props;
      return (
        <div className="paymentSelection">
          <Grid container direction="column">
            <Grid item>
              <PaymentDetailsSteps currentStep={'methods'} />
            </Grid>
            <Grid item>
            </Grid>
            <Grid item>
              <Grid container justify="space-between" alignItems="center">
                <Grid item>
                  <Button component={Link} to="/">
                    <KeyboardBackspaceIcon className={classes.buttonIcon} />
                    Return to customer account
                  </Button>
                </Grid>
                <Grid item>
                  <Button component={Link} to="/checkout" variant="contained" size="large" color="primary">
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
  
  export default withStyles(styles)(PaymentSelection);