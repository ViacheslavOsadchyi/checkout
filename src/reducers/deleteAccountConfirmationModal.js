import {
    SHOW_DELETE_ACCOUNT_CONFIRMATION_MODAL,
    HIDE_DELETE_ACCOUNT_CONFIRMATION_MODAL,
} from '../actions/deleteAccountConfirmationModal';

const initialState = {
    accountId: null,
    isVisible: false,
};

export default function deleteAccountConfirmationModal (state = initialState, action) {
    switch (action.type) {
        case SHOW_DELETE_ACCOUNT_CONFIRMATION_MODAL:
            return {
                accountId: action.accountId,
                isVisible: true,
            };
        case HIDE_DELETE_ACCOUNT_CONFIRMATION_MODAL:
            return {
                accountId: null,
                isVisible: false,
            }
        default:
            return state;
    }
}