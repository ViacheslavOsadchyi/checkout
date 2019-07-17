import {
    deleteAccount,
  } from './customerAccounts';
  
  /*
   * action types
   */
  
  export const SHOW_DELETE_ACCOUNT_CONFIRMATION_MODAL = 'SHOW_DELETE_ACCOUNT_CONFIRMATION_MODAL';
  export const HIDE_DELETE_ACCOUNT_CONFIRMATION_MODAL = 'HIDE_DELETE_ACCOUNT_CONFIRMATION_MODAL';
  
  
  /*
   * action creators
   */
  
  export function showDeleteAccountConfirmationModal(accountId) {
    return { type: SHOW_DELETE_ACCOUNT_CONFIRMATION_MODAL, accountId }
  }
  
  export function hideDeleteAccountConfirmationModal(id) {
    return { type: HIDE_DELETE_ACCOUNT_CONFIRMATION_MODAL }
  }
  
  export function deleteAccountFromModal(id) {
    return (dispatch) => {
      dispatch(hideDeleteAccountConfirmationModal());
      setTimeout(()=>{
        dispatch(deleteAccount(id));
      }, 500);
    }
  }
  