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

  // User Login info
  const database = [
    {
      username: 'tony@stark.com',
      password: 'password123',
    },
    {
      username: 'steve@rogers.com',
      password: 'password456',
    },
  ];

  const errors = {
    uname: 'invalid email',
    pass: 'invalid password',
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    // Find user login info
    const userData = database.find((user) => user.username === email.value);

    // Compare user info
    if (userData) {
      if (userData.password !== password.value) {
        // Invalid password
        setErrorMessages({ name: 'pass', message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: 'uname', message: errors.uname });
    }
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
    <>
      {isSubmitted ? (
        <Navigate to={'/SignIn/User'} replace={true} />
      ) : (
        renderForm
      )}
    </>
  );
}
