import {
    SET_CART_TOTAL_VALUE,
    RESET_CART_TOTAL,
} from '../actions/cart';

const initialState = {
    items: [
        {
            product: "0",
            quantity: 1
        },
        {
            product: "1",
            quantity: 1
        }
    ],
    subtotal: 400,
    total: 400,
};

export default function cart (state = initialState, action) {
    switch (action.type) {
        case SET_CART_TOTAL_VALUE:
            return {
                ...state,
                total: action.value,
            }
        case RESET_CART_TOTAL:
            return {
                ...state,
                total: state.subtotal,
            }
        default:
    }
    return state;
}