import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useUser } from '../../Context/UserContext';

const Auth = () => {
  const { setUserInput } = useUser();
  const location = useLocation();
  const history = useHistory();

  const handleSignIn = (event) => {
    setUserInput('xxx');
    const { from } = location.state || { from: { pathname: '/' } };
    history.replace(from.pathname);
  };

  return (
    <form>
      <h1>Auth</h1>
      <button type="button" onClick={handleSignIn}>
        Sign in as xxx
      </button>
    </form>
  );
};

export default Auth;
