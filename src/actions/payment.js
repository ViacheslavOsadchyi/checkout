import {
  setCartTotalValue,
} from '../actions/cart';

/*
 * action types
 */

export const SET_PAYMENT_ACCOUNT = 'SET_PAYMENT_ACCOUNT';
export const SET_PAYMENT_METHOD = 'SET_PAYMENT_METHOD';
// export const SET_TOTAL_VALUE = 'SET_TOTAL_VALUE';


/*
 * action creators
 */

export function setPaymentAccount(id) {
  return { type: SET_PAYMENT_ACCOUNT, id };
}

export function selectAccount(id) {
  return function (dispatch, getState) {
    const state = getState();
    const accData = state.accounts[id];
    dispatch(setPaymentAccount(id));
    dispatch(selectMethod(accData.method));
  }
}

// export function setTotalValue(value) {
//   return { type: SET_TOTAL_VALUE, value }
// }

export function setPaymentMethod(methodId) {
  return { type: SET_PAYMENT_METHOD, id: methodId };
}

export function selectMethod(methodId) {
  return function (dispatch, getState) {
    const state = getState();
    const {
      cart: {
        subtotal,
      },
      paymentMethods,
      fees,
    } = state;

    console.log('Here!!!');
    console.log(paymentMethods[methodId]);
    const methodFees = paymentMethods[methodId].fees.map(id => fees[id]);

    const total = methodFees.reduce((currentTotal, feeData) => {
      return currentTotal += currentTotal * (parseFloat(feeData.percents) / 100);
    }, subtotal);

    
    dispatch(setPaymentMethod(methodId));
    dispatch(setCartTotalValue(Math.round(total * 100)/100));
  }
}