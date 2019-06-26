/*
 * action types
 */

export const SELECT_ACCOUNT = 'SELECT_ACCOUNT';
export const SELECT_METHOD = 'SELECT_METHOD';


/*
 * action creators
 */

export function selectAccount(id) {
  return { type: SELECT_ACCOUNT, id };
}

export function selectMethod(method) {
  return { type: SELECT_METHOD, method };
}