import {
    SET_PAYMENT_ACCOUNT, 
    SET_PAYMENT_METHOD,
} from '../actions/payment';
import {
    DELETE_ACCOUNT_INSTANCE,
} from '../actions/customerAccounts';

const initialState = {
    account: null,
    method: null,
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
        case DELETE_ACCOUNT_INSTANCE:
            if (action.id === state.account){
                return {
                    ...state,
                    account: null,
                    method: null,
                }
            }
            return state;
        default:
            return state;
    }
}