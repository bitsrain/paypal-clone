import React, { useCallback, useEffect, useState } from 'react';
import EmailForm from './steps/EmailForm';
import './index.scss';
import PhoneForm from './steps/PhoneForm';
import PasswordForm from './steps/PasswordForm';
import PersonalInfoForm from './steps/PersonalInfoForm';
import CodeForm from './steps/CodeForm';
import { useDispatch, useSelector } from 'react-redux';
import { clearDraft, init, signUp, updateDraft } from '../../actions/signup_actions';
import { useNavigate } from 'react-router-dom';

const STEPS = {
  EMAIL: 0,
  PHONE: 1,
  PASSWORD: 2,
  PERSONAL_INFO: 3,
};

const PageWrap = ({ children }) => (
  <div className="sign-up-page">
    {children}
  </div>
);

const SignUp = () => {
  const [step, setStep] = useState(STEPS.EMAIL);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const values = useSelector(state => state.signup.draft);
  const signUpSuccess = useSelector(state => state.signup.signUpSuccess);

  useEffect(() => {
    dispatch(init());
  }, []);

  useEffect(() => {
    if (signUpSuccess) {
      dispatch(init());
      navigate('/login', { 
        replace: true,
        state: { message: 'Successfully signed up! Login using your credentials.' },
      });
    }
  }, [signUpSuccess]);

  const updateValues = updatedValues => {
    dispatch(updateDraft(updatedValues));
  };

  const handleStepBack = useCallback(() => {
    setStep(step - 1);
  }, [step]);

  const handleEmail = useCallback((formValues) => {
    updateValues(formValues);
    setStep(STEPS.PHONE);
  });

  const handlePhone = useCallback((formValues) => {
    updateValues(formValues);
    setStep(STEPS.PASSWORD);
  });

  const handlePassword = useCallback((formValues) => {
    updateValues(formValues);
    setStep(STEPS.PERSONAL_INFO);
  });

  const handleSignup = useCallback((formValues) => {
    // sign up now
    updateValues(formValues);
    dispatch(signUp({ ...values, ...formValues })); // can't wait until redux state is updated
  }, [values]);

  if (step === STEPS.EMAIL) {
    return (<PageWrap><EmailForm initialValues={values} onSubmit={handleEmail} /></PageWrap>);
  } else if (step === STEPS.PHONE) {
    return (<PageWrap><PhoneForm initialValues={values} onBack={handleStepBack} onSubmit={handlePhone} /></PageWrap>);
  } else if (step === STEPS.PASSWORD) {
    return (<PageWrap><PasswordForm initialValues={values} onBack={handleStepBack} onSubmit={handlePassword}/></PageWrap>);
  } else if (step === STEPS.PERSONAL_INFO) {
    return (<PageWrap><PersonalInfoForm initialValues={values} onBack={handleStepBack} onSubmit={handleSignup}/></PageWrap>);
  }

  return null;
};

export default SignUp;
