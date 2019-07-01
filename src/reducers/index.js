import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import customerAccounts from './accounts';
import products from './products';
import cart from './cart';
import addAccountModal from './addAccountModal';
import editAccountModal from './editAccountModal';
import payment from './payment';
import paymentMethods from './paymentMethods';
import fees from './fees';

const paymentApp = combineReducers({
    addAccountModal,
    editAccountModal,
    accounts: customerAccounts,
    products,
    cart,
    payment,
    form: formReducer,
    paymentMethods,
    fees,
})

export default paymentApp;