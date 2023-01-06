import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import styles from './InputsSignIn.module.scss';

/**
 *
 * @returns
 */

// source : https://contactmentor.com/login-form-react-js-code/

export function InputsSignIn() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const errors = {
    uname: 'invalid email',
    pass: 'invalid password',
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const data = JSON.stringify({ email, password });

    fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      body: data,
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
      .then((res) => res.json())
      .then((result) => {
        localStorage.setItem('token', result.body.token);
        setIsSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className={styles.error}>{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className={styles.inputWrapper}>
          <label>Email</label>
          <input type="text" name="email" id="email" required />
          {renderErrorMessage('uname')}
        </div>
        <div className={styles.inputWrapper}>
          <label>Password</label>
          <input type="password" name="pass" id="password" required />
          {renderErrorMessage('pass')}
        </div>
        <div className={styles.inputRemember}>
          <input type="checkbox" />
          <label>Remember me</label>
        </div>
        <input
          type="submit"
          value={'Sign in'}
          className={styles.signInButton}
        />
      </form>
    </div>
  );

  return (
    <>{isSubmitted ? <Navigate to={'/User'} replace={true} /> : renderForm}</>
  );
}
