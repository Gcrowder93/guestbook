import { useHistory, useLocation } from 'react-router-dom';
import { useUser } from '../../Context/UserContext';
import React, { useState } from 'react';

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
      <form>
        <h5>
          Email: <i>gcrowder93@gmail.com</i>
          <br></br>
          Password: <i>password</i>
        </h5>

        <input
          htmlFor="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="email"
        />
        <div>
          <input
            htmlFor="password"
            type="password"
            value={password}
            placeholder="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="button" onClick={handleSignIn}>
          Sign in as {email}
        </button>
      </form>
    </>
  );
};

export default Auth;
