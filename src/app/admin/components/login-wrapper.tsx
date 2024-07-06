'use client';
import { useState } from 'react';
import LoginForm from './login-form';
export default function LoginWrapper({
  children,
  isLoggedIn,
}: {
  children: React.ReactNode;
  isLoggedIn: boolean;
}) {
  const [hideLoginForm, setHideLoginForm] = useState(isLoggedIn);
  const handleHide = () => setHideLoginForm(true);
  return (
    <>
      {hideLoginForm ? <>{children}</> : <LoginForm handleHide={handleHide} />}
    </>
  );
}
