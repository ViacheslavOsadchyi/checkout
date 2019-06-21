/*
 * action types
 */

export const SELECT_ACCOUNT = 'SELECT_ACCOUNT';
export const SELECT_METHOD = 'SELECT_METHOD';
export const SET_ACTIVE_TAB = 'SET_ACTIVE_TAB';


/*
 * action creators
 */

export function selectAccount(id) {
  return { type: SELECT_ACCOUNT, id };
}

export function selectMethod(id) {
  return { type: SELECT_METHOD, id };
}

export function setActiveTab(tab) {
  return { type: SET_ACTIVE_TAB, tab };
}