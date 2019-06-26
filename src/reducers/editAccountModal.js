import {
    SHOW_EDIT_ACCOUNT_MODAL,
    HIDE_EDIT_ACCOUNT_MODAL,
} from '../actions/editAccountModal';

const initialState = {
    accountId: null,
    isVisible: false,
};

export default function editAccountModal (state = initialState, action) {
    switch (action.type) {
        case SHOW_EDIT_ACCOUNT_MODAL:
            return {
                accountId: action.accountId,
                isVisible: true,
            };
        case HIDE_EDIT_ACCOUNT_MODAL:
            return {
                accountId: null,
                isVisible: false,
            }
        default:
            return state;
    }
}