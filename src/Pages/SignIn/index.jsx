import { useState } from 'react';
import SignUpForm from '../../Components/SignUpForm';
import LogInForm from '../../Components/LogInForm';

const SignIn = () => {
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  return (
    <>
      <h1 className='font-medium text-xl mb-6'>Welcome</h1>
      {showSignUpForm ? (
        <SignUpForm setShowSignUpForm={setShowSignUpForm} formMode='Create' />
      ) : (
        <LogInForm setShowSignUpForm={setShowSignUpForm} />
      )}
    </>
  );
};

export default SignIn;
