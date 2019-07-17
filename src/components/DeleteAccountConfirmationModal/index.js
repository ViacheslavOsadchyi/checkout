import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined';
import { withStyles } from '@material-ui/core/styles';
import componentStyles from './styles';

class DeleteAccountConfirmationModal extends Component {
    render() {
      const {
        isVisible,
        accountData,
        handleClose,
        handleDelete,
        classes,
      } = this.props;

      return isVisible ? (
        <Dialog
            minwidth={300}
            open={isVisible}
        >
            <DialogTitle>
                Are you sure you want to delete this account?
            </DialogTitle>
            <DialogContent>
                <DialogContentText className={`${classes.accDetailsText} ${classes.accTitleText}`}>
                    <PersonOutlinedIcon className={classes.accDetailsIcon} /><span>{accountData.name}</span>
                </DialogContentText>
                <DialogContentText className={classes.accDetailsText}>
                    <MailOutlinedIcon className={classes.accDetailsIcon} /><span>{accountData.email}</span>
                </DialogContentText>
                <DialogContentText className={classes.accDetailsText}>
                    <PaymentOutlinedIcon className={classes.accDetailsIcon} /><span><em>{accountData.method.label}</em></span>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => handleDelete(accountData.id)}>
                    Yes
                </Button>
                <Button onClick={handleClose} color="primary">
                    No
                </Button>
            </DialogActions>
        </Dialog>
      ): null;
    }
  }
  
  export default withStyles(componentStyles)(DeleteAccountConfirmationModal);