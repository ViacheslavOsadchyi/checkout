import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';
import { connect } from 'react-redux'
import MenuItem from '@material-ui/core/MenuItem';
import MaterialSelect from '../MaterialSelect';
import MaterialTextField from '../MaterialTextField';
import {
  required as requiredValidationRule,
  email as emailValidationRule,
} from '../../validationRules';
import {
  editAccountFromModal,
} from '../../actions/editAccountModal';

function submit (values, dispatch, form) {
  dispatch(editAccountFromModal(form.accountId, values));
}

class EditAccountForm extends Component {
    render() {
      const {
        handleSubmit,
        paymentMethods,
      } = this.props;

      console.log('Props!!!');
      console.log(this.props);

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
  
  export default connect(state => {
    const accIndex = _.findIndex(state.accounts, ['id', state.editAccountModal.accountId]);
    const accData = state.accounts[accIndex];
    const paymentMethods = state.paymentMethods;

    return {
      initialValues: accData,
      paymentMethods,
    };
})(
  reduxForm({form: 'editAccount', onSubmit: submit}
)(
  EditAccountForm
));