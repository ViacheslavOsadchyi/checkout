import {
  createAccountInstance,
} from './customerAccounts';

/*
 * action types
 */

export const SHOW_ADD_ACCOUNT_MODAL = 'SHOW_ADD_ACCOUNT_MODAL';
export const HIDE_ADD_ACCOUNT_MODAL = 'HIDE_ADD_ACCOUNT_MODAL';


/*
 * action creators
 */

export function showAddAccountModal() {
  return { type: SHOW_ADD_ACCOUNT_MODAL }
}

export function hideAddAccountModal(id) {
  return { type: HIDE_ADD_ACCOUNT_MODAL }
}

export function addAccountFromModal(accData) {
  return (dispatch) => {
    dispatch(hideAddAccountModal());
    setTimeout(()=>{
      dispatch(createAccountInstance(accData));
    }, 500);
  }
}
