import React, { Component } from 'react';
import { connect } from 'react-redux'
import { submit } from 'redux-form'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AddAccountForm from '../AddAccountForm';

class AddAccountModal extends Component {
    render() {
      const {
        addAccountModalShow,
        handleClose,
        dispatch,
      } = this.props;
      return (
        <Dialog
            minWidth={300}
            open={addAccountModalShow}
        >
            <DialogTitle>
                Add Customer Account
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                </DialogContentText>
                <AddAccountForm />
            </DialogContent>
            <DialogActions>
                 <Button onClick={() => {
                    dispatch(submit('addAccount'));
                 }}>
                    Add
                </Button>
                <Button onClick={handleClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
      );
    }
  }
  
  export default connect()(AddAccountModal);