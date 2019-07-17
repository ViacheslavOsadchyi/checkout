import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import customerAccounts from './accounts';
import products from './products';
import fees from './fees';
import cart from './cart';
import addAccountModal from './addAccountModal';
import editAccountModal from './editAccountModal';
import deleteAccountConfirmationModal from './deleteAccountConfirmationModal';
import payment from './payment';
import paymentMethods from './paymentMethods';

const paymentApp = combineReducers({
    addAccountModal,
    editAccountModal,
    deleteAccountConfirmationModal,
    accounts: customerAccounts,
    products,
    fees,
    cart,
    payment,
    form: formReducer,
    paymentMethods,
})

export default paymentApp;