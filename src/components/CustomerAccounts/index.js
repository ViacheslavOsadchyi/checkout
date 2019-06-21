import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';
import CustomerAccountX from '../../containers/CustomerAccountX';

const styles = theme => ({
  gridContainer: {
    padding: theme.spacing.unit * 2,
  }
});

class CustomerAccounts extends Component {
    render() {
      const {
        accounts,
        onAddAccountClick,
        classes,
      } = this.props;

      return (
        <div className="customerAccounts">
            <div className={classes.gridContainer + " customerAccounts__grid"}>
              <Grid container spacing={24}>
                {accounts.map((accData) => (
                  <Grid key={accData.id} item>
                    <CustomerAccountX id={accData.id} />
                  </Grid>
                ))}
                <Grid item>
                  <Fab color="primary" aria-label="Add" onClick={onAddAccountClick}>
                    <Icon>+</Icon>
                  </Fab>
                </Grid>
              </Grid>
            </div>
        </div>
      );
    }
  }
  
  export default withStyles(styles)(CustomerAccounts);