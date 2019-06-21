import {
    SHOW_EDIT_ACCOUNT_MODAL,
    HIDE_EDIT_ACCOUNT_MODAL,
} from '../actions/editAccountModal';

export default function editAccountModal (state = false, action) {
    switch (action.type) {
        case SHOW_EDIT_ACCOUNT_MODAL:
            return true;
        case HIDE_EDIT_ACCOUNT_MODAL:
            return false;
        default:
            return false;
    }
}