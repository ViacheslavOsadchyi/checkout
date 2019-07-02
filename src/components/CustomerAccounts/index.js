import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import PaymentDetailsSteps from '../PaymentDetailsSteps';
import CustomerAccountX from '../../containers/CustomerAccountX';
import componentStyles from './styles';

class CustomerAccounts extends Component {
    render() {
      const {
        accounts,
        onAddAccountClick,
        isAccountSelected,
        classes,
      } = this.props;

      return (
        <div className="customerAccounts">
          <Grid container direction="column">
            <Grid item>
              <PaymentDetailsSteps currentStep={'accounts'} />
            </Grid>
            <Grid item>
              <div className={classes.gridContainer + " customerAccounts__grid"}>
                <Grid container spacing={24}>
                  {Object.values(accounts).sort((a, b) => {
                    if (a.created_at > b.created_at) {
                      return 1;
                    }
                    if (a.created_at < b.created_at) {
                      return -1;
                    }
                    return 0;
                  }).map((accData) => (
                    <Grid key={accData.id} item>
                      <CustomerAccountX id={accData.id} />
                    </Grid>
                  ))}
                  <Grid item>
                    <Fab color="primary" aria-label="Add" onClick={onAddAccountClick}>
                      <AddIcon />
                    </Fab>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item>
              <Grid container justify="space-between" alignItems="center">
                <Grid item>
                  <Button>
                    <KeyboardBackspaceIcon className={classes.buttonIcon} />
                    Return to shop
                  </Button>
                </Grid>
                <Grid item>
                  <Button component={Link} to="/methods" disabled={!isAccountSelected} variant="contained" size="large" color="primary">
                    continue to payment
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      );
    }
  }
  
  export default withStyles(componentStyles)(CustomerAccounts);