/*
 * action types
 */

 export const SET_CART_TOTAL_VALUE = 'SET_CART_TOTAL_VALUE';
 export const RESET_CART_TOTAL = 'RESET_CART_TOTAL';



/*
 * action creators
 */

export function setCartTotalValue(value) {
  return { type: SET_CART_TOTAL_VALUE, value }
}

export function resetCartTotal() {
  return { type: RESET_CART_TOTAL }
}