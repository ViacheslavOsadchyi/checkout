import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Button from '@material-ui/core/Button';
import { SubmissionError } from 'redux-form';
import MaterialTextField from '../MaterialTextField';
import {
  required as requiredValidationRule,
  email as emailValidationRule,
} from '../../validationRules';
import {
  addAccountFromModal,
} from '../../actions/addAccountModal';

function submit (values, dispatch, form) {
  let newAccount = {
    ...values,
    id: parseInt(Math.random() * 10000),
  }
  dispatch(addAccountFromModal(newAccount));
}

class AddAccountForm extends Component {
    render() {
      const {
        handleSubmit,
      } = this.props;

      return (
        <form onSubmit={handleSubmit}>
          <Field
            name='name'
            validate={[requiredValidationRule]}
            component={MaterialTextField}
            fullWidth
            label="Name *"
            margin="dense"
          />
          <Field
            name='email'
            validate={[requiredValidationRule,emailValidationRule]}
            component={MaterialTextField}
            fullWidth
            label="Email *"
            margin="dense"
          />
        </form>
      );
    }
  }
  
  export default reduxForm({form: 'addAccount', onSubmit: submit})(AddAccountForm);