import {
  editAccount,
} from './customerAccounts';

/*
 * action types
 */

export const SHOW_EDIT_ACCOUNT_MODAL = 'SHOW_EDIT_ACCOUNT_MODAL';
export const HIDE_EDIT_ACCOUNT_MODAL = 'HIDE_EDIT_ACCOUNT_MODAL';


/*
 * action creators
 */

export function showEditAccountModal(accountId) {
  return { type: SHOW_EDIT_ACCOUNT_MODAL, accountId }
}

export function hideEditAccountModal(id) {
  return { type: HIDE_EDIT_ACCOUNT_MODAL }
}

export function editAccountFromModal(id, data) {
  return (dispatch) => {
    dispatch(hideEditAccountModal());
    setTimeout(()=>{
      dispatch(editAccount(id, data));
    }, 500);
  }
}
