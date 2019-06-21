import {
    SELECT_ACCOUNT,
    SELECT_METHOD,
    SET_ACTIVE_TAB,
} from '../actions/payment';

const initialState = {
    account: null,
    method: null,
    activeTab: 'accounts',
    VATIncluded: false,
    comissionIncluded: false,
    total: 0,
};

export default function payment (state = initialState, action) {
    switch (action.type) {
        case SET_ACTIVE_TAB:
            return {
                ...state,
                activeTab: action.tab,
            };
        default:
            return state;
    }
}