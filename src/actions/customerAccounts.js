import {
  clearCartTotal,
} from './cart';

/*
 * action types
 */

export const CREATE_ACCOUNT_INSTANCE = 'CREATE_ACCOUNT_INSTANCE';
export const EDIT_ACCOUNT_INSTANCE = 'EDIT_ACCOUNT_iNSTANCE';
export const DELETE_ACCOUNT_INSTANCE = 'DELETE_ACCOUNT_INSTANCE';


/*
 * action creators
 */

export function createAccountInstance(data) {
  return { type: CREATE_ACCOUNT_INSTANCE, data }
}

export function editAccountInstance(id, data) {
  return { type: EDIT_ACCOUNT_INSTANCE, id, data }
}

export function deleteAccount(id) {
  return function (dispatch, getState) {
    const state = getState();
    if (state.payment.account === id) {
      dispatch(clearCartTotal());
    }
    dispatch(deleteAccountInstance(id));
  }
}
export function deleteAccountInstance(id) {
  return { type: DELETE_ACCOUNT_INSTANCE, id }
}