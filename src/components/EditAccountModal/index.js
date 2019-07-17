import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submit } from 'redux-form'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import EditAccountForm from '../EditAccountForm';

class EditAccountModal extends Component {
    render() {
      const {
        isVisible,
        accountId,
        handleClose,
        dispatch,
      } = this.props;

      return (
        <Dialog
            open={isVisible}
        >
            <DialogTitle>
                Edit Customer Account
            </DialogTitle>
            <DialogContent>
                <EditAccountForm accountId={accountId} />
            </DialogContent>
            <DialogActions>
                 <Button onClick={() => {
                    dispatch(submit('editAccount'));
                 }}>
                    Save
                </Button>
                <Button onClick={handleClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
      );
    }
  }
  
  export default connect()(EditAccountModal);