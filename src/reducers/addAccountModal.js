import {
    SHOW_ADD_ACCOUNT_MODAL,
    HIDE_ADD_ACCOUNT_MODAL,
} from '../actions/addAccountModal';

export default function addAccountModal (state = false, action) {
    switch (action.type) {
        case SHOW_ADD_ACCOUNT_MODAL:
            return true;
        case HIDE_ADD_ACCOUNT_MODAL:
            return false;
        default:
            return state;
    }
}