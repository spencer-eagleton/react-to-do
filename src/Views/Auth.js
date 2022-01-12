import AuthForm from '../Components/AuthForm';
import { useState } from 'react';
import { signInUser, signUpUser } from '../services/users';
import './Auth.css';
import classNames from 'classnames';

export default function Auth({ setCurrentUser }) {
  const [type, setType] = useState('signin');
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp =
        type === 'signin' ? await signInUser(email, password) : await signUpUser(email, password);

      setCurrentUser(resp);
    } catch {
      setErrorMessage('error. invalid login.');
    }
  };
  return (
    <div>
      <div className="tabs">
        <h1
          onClick={() => {
            setType('signin');
          }}
          className={classNames({ active: type === 'signin' })}
        >
          Sign In
        </h1>
        <h1
          onClick={() => {
            setType('signup');
          }}
          className={classNames({ active: type === 'signup' })}
        >
          Sign Up
        </h1>
      </div>

      <h1>Type: {type}</h1>
      <p>{errorMessage}</p>
      <AuthForm
        errorMessage={errorMessage}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
