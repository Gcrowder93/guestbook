import { useHistory, useLocation } from 'react-router-dom';
import { useUser } from '../../Context/UserContext';
import React, { useState } from 'react';
import './Auth.css';

const Auth = () => {
  const { setUserInput } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();
  const history = useHistory();

  const handleSignIn = () => {
    if (email === process.env.REACT_APP_AUTH_USERNAME) setUserInput({ email });
    if (password === process.env.REACT_APP_AUTH_USERNAME) setPassword({ password });
    setUserInput(email);
    const { from } = location.state || { from: { pathname: '/' } };
    history.replace(from.pathname);
  };

  return (
    <>
      <form className="form">
        <h3>
          Email:{' '}
          <i>
            <u>gcrowder93@gmail.com</u>
          </i>
          <br></br>
          Password:{' '}
          <i>
            <u>password</u>
          </i>
        </h3>
        {/* <div className="form"> */}
        <input
          className="inpute"
          htmlFor="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="email"
        />
        <div>
          <input
            className="inputp"
            htmlFor="password"
            type="password"
            value={password}
            placeholder="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          {/* </div> */}
        </div>
        <button className="btn1" type="button" onClick={handleSignIn}>
          Sign in
        </button>
      </form>
    </>
  );
};

export default Auth;
