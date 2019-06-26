import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import customerAccounts from './accounts';
import addAccountModal from './addAccountModal';
import editAccountModal from './editAccountModal';
import payment from './payment';
import paymentMethods from './paymentMethods';

const paymentApp = combineReducers({
    addAccountModal,
    editAccountModal,
    accounts: customerAccounts,
    payment,
    form: formReducer,
    paymentMethods,
})

export default paymentApp;