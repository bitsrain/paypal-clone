export const LOAD_SINGLE = 'transaction/load_single';
export const LOAD_SINGLE_SUCCESS = 'transaction/load_single_success';
export const LOAD_SINGLE_FAIL = 'transaction/load_single_fail';

export const loadSingle = (payload) => ({
  type: LOAD_SINGLE,
  payload,
});
