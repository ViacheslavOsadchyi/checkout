import {
  resetCartTotal,
} from './cart';
import { selectMethod } from './payment';

/*
 * action types
 */

export const CREATE_ACCOUNT_INSTANCE = 'CREATE_ACCOUNT_INSTANCE';
export const UPDATE_ACCOUNT_INSTANCE = 'UPDATE_ACCOUNT_iNSTANCE';
export const DELETE_ACCOUNT_INSTANCE = 'DELETE_ACCOUNT_INSTANCE';


/*
 * action creators
 */

export function createAccountInstance(data) {
  return { type: CREATE_ACCOUNT_INSTANCE, data }
}

export function updateAccountInstance(id, data) {
  return { type: UPDATE_ACCOUNT_INSTANCE, id, data }
}

export function editAccount (id, data) {
  return function (dispatch, getState) {
    const state = getState();
    const {
      payment: {
        account,
        method,
      },
    } = state;

    if (id === account && data.method !== method) {
      dispatch(selectMethod(data.method));
    }
    dispatch(updateAccountInstance(id, data));
  }
}

export function deleteAccount(id) {
  return function (dispatch, getState) {
    const state = getState();
    if (state.payment.account === id) {
      dispatch(resetCartTotal());
    }
    dispatch(deleteAccountInstance(id));
  }
}
export function deleteAccountInstance(id) {
  return { type: DELETE_ACCOUNT_INSTANCE, id }
}