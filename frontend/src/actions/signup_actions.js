export const INIT = 'signup/init';
export const UPDATE_DRAFT = 'signup/update_draft';
export const UNSET_DRAFT_FIELDS = 'signup/unset_draft_fields';
export const CLEAR_DRAFT = 'signup/clear_draft';
export const SIGN_UP = 'signup/sign_up';
export const SIGN_UP_SUCCESS = 'signup/sign_up_success';
export const SIGN_UP_FAIL = 'signup/sign_up_fail';

export const init = () => ({
  type: INIT,
});

export const clearDraft = () => ({
  type: CLEAR_DRAFT,
});

export const updateDraft = (payload) => ({
  type: UPDATE_DRAFT,
  payload,
});

export const unsetDraftFields = (fieldsArr) => ({
  type: UNSET_DRAFT_FIELDS,
  payload: fieldsArr,
});

export const signUp = (values) => {
  const requestableValues = {
    ...values,
    full_name: `${values.first_name} ${values.last_name}`,
  };

  return {
    type: SIGN_UP,
    payload: requestableValues,
  };
};
