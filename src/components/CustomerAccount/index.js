import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    position: 'relative',
  },
  deleteButton: {
    position: 'absolute',
    top: 6,
    right: 6,
    cursor: 'pointer',
    fontWeight: 700,
    backgroundColor: '#cecece',
    display: 'block',
    borderRadius: '100%',
    width: 20,
    height: 20,
    lineHeight: '1',
  }
});

class CustomerAccount extends Component {
    render() {
      const {
        classes,
        accData,
        deleteAccountHandler,
      } = this.props;

      return (
        <Paper className={classes.paper + ' customerAccountItem'}>
            <h3>{accData.name}</h3>
            <span>{accData.email}</span>
            <span className={classes.deleteButton} onClick={deleteAccountHandler}>
                x
            </span>
        </Paper>
      );
    }
  }
  
  export default withStyles(styles)(CustomerAccount);