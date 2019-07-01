/*
 * action types
 */

 export const SET_CART_TOTAL_VALUE = 'SET_CART_TOTAL_VALUE';
 export const CLEAR_CART_TOTAL = 'CLEAR_CART_TOTAL';



/*
 * action creators
 */

export function setCartTotalValue(value) {
  return { type: SET_CART_TOTAL_VALUE, value }
}

export function clearCartTotal() {
  return { type: CLEAR_CART_TOTAL }
}