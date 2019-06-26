import {
    SELECT_ACCOUNT,
} from '../actions/payment';
import {
    DELETE_ACCOUNT,
} from '../actions/customerAccounts';

const initialState = {
    account: null,
    method: null,
    VATIncluded: false,
    comissionIncluded: false,
    total: 0,
};

export default function payment (state = initialState, action) {
    switch (action.type) {
        case SELECT_ACCOUNT:
            return {
                ...state,
                account: action.id,
            };
        case DELETE_ACCOUNT:
            if (action.id === state.account){
                return {
                    ...state,
                    account: null,
                }
            }
            return state;
        default:
            return state;
    }
}