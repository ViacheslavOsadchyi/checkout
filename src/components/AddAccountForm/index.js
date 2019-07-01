import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import MaterialTextField from '../MaterialTextField';
import MaterialSelect from '../MaterialSelect';
import MenuItem from '@material-ui/core/MenuItem';
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
    id: String(parseInt(Math.random() * 10000)),
    created_at: Date.now(),
  }
  dispatch(addAccountFromModal(newAccount));
}

class AddAccountForm extends Component {
    render() {
      const {
        handleSubmit,
        paymentMethods,
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
          <Field
            name="method"
            component={MaterialSelect}
            validate={[requiredValidationRule]}
            custom={{
              label: 'Payment Method *'
            }}
          >
            <MenuItem value=""><em>None</em></MenuItem>
            {Object.keys(paymentMethods).map(id => {
              const methodData = paymentMethods[id];
              return (<MenuItem key={id} value={id}>{methodData.label}</MenuItem>);
            })}
          </Field>
        </form>
      );
    }
  }
  
  export default connect(state => ({paymentMethods: state.paymentMethods}))(reduxForm({form: 'addAccount', onSubmit: submit})(AddAccountForm));