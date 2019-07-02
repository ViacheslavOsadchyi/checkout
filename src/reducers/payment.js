import {
    SET_PAYMENT_ACCOUNT, 
    SET_PAYMENT_METHOD,
} from '../actions/payment';
import {
    DELETE_ACCOUNT,
} from '../actions/customerAccounts';

const initialState = {
    account: null,
    method: null,
    VATIncluded: false,
    comissionIncluded: false,
    total: 400,
};

export default function payment (state = initialState, action) {
    switch (action.type) {
        case SET_PAYMENT_ACCOUNT:
            return {
                ...state,
                account: action.id,
            };
        case SET_PAYMENT_METHOD:
            return {
                ...state,
                method: action.id,
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