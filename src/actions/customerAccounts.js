/*
 * action types
 */

export const CREATE_ACCOUNT = 'CREATE_ACCOUNT';
export const EDIT_ACCOUNT = 'EDIT_ACCOUNT';
export const DELETE_ACCOUNT = 'DELETE_ACCOUNT';


/*
 * action creators
 */

export function addAccount(data) {
  return { type: CREATE_ACCOUNT, data }
}

export function editAccount(id, data) {
  return { type: EDIT_ACCOUNT, id, data }
}

export function deleteAccount(id) {
  return { type: DELETE_ACCOUNT, id }
}