/*
 * action types
 */

 export const SET_CART_TOTAL_VALUE = 'SET_CART_TOTAL_VALUE';


/*
 * action creators
 */

export function setCartTotalValue(value) {
  return { type: SET_CART_TOTAL_VALUE, value }
}