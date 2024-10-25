export const SET_DRAFT = 'invoice/set_draft';
export const CLEAR_DRAFT = 'invoice/clear_draft';

export const setDraft = payload => ({
  type: SET_DRAFT,
  payload,
});

export const clearDraft = () => ({
  type: CLEAR_DRAFT,
});
