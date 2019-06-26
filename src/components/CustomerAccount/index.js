import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import CreateIcon from '@material-ui/icons/Create';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    paddingLeft: '68px',
    position: 'relative',
  },
  markArea: {
    position: 'absolute',
    top: '50%',
    left: '10px',
    transform: 'translate(0,-50%)',
  },
  actionButton: {
    position: 'absolute',
    top: 6,
    cursor: 'pointer',
    fontWeight: 700,
    display: 'block',
    borderRadius: '100%',
    width: 20,
    height: 20,
    lineHeight: '1',
  },
  editButton: {
    right: 36,
  },
  deleteButton: {
    right: 6,
  }
});

class CustomerAccount extends Component {
    render() {
      const {
        classes,
        accData,
        methodData,
        isSelected,
        deleteAccountHandler,
        selectAccountHandler,
        showEditAccountModalHandler,
      } = this.props;

      return (
        <Paper
          className={classes.paper + ' customerAccountItem'}
        >
          <div className={classes.markArea}>
            <Radio
              checked={isSelected}
              onClick={selectAccountHandler}
            />
          </div>
          <div className={classes.accDataArea}>
            <h3>{accData.name}</h3>
            <p>{accData.email}</p>
            <p><em>{methodData.label}</em></p>
            <span className={`${classes.actionButton} ${classes.editButton}`} onClick={showEditAccountModalHandler}>
                <CreateIcon />
            </span>
            <span className={`${classes.actionButton} ${classes.deleteButton}`} onClick={deleteAccountHandler}>
                <DeleteForeverIcon />
            </span>
          </div>
        </Paper>
      );
    }
  }
  
  export default withStyles(styles)(CustomerAccount);