import React from 'react';
import { InputField } from 'bumbag';
import AuthLayout from '../../components/AuthLayout';

const Signup = () => {
  return (
    <AuthLayout buttonText="Sign up" title="Sign up">
      <InputField
        label="Username"
        placeholder="Enter your username here..."
        marginTop="16px"
        width="100%"
      />
      <InputField
        label="Password"
        placeholder="Enter your password here..."
        marginTop="18px"
        type="password"
        width="100%"
      />
      <InputField
        label="Repeat password"
        placeholder="Repeat your password here..."
        marginTop="18px"
        marginBottom="16px"
        type="password"
        width="100%"
      />
    </AuthLayout>
  );
};

export default Signup;
