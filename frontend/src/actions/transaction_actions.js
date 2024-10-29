export const LOAD_SINGLE = 'transaction/load_single';
export const LOAD_SINGLE_SUCCESS = 'transaction/load_single_success';
export const LOAD_SINGLE_FAIL = 'transaction/load_single_fail';
export const LOAD_LIST = 'transaction/load_list';
export const LOAD_LIST_SUCCESS = 'transaction/load_list_success';
export const LOAD_LIST_FAIL = 'transaction/load_list_fail';

export const loadSingle = (payload) => ({
  type: LOAD_SINGLE,
  payload,
});

export const loadList = (payload) => ({
  type: LOAD_LIST,
  payload,
});
