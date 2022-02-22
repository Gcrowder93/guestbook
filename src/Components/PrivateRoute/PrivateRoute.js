import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { useUser } from '../../Context/UserContext';

export default function PrivateRoute({ children, ...routeProps }) {
  const { userInput } = useUser();
  return (
    <>
      <p>Private Route</p>
      <Route
        {...routeProps}
        render={({ location }) =>
          userInput ? children : <Redirect to={{ pathname: '/login', state: { from: location } }} />
        }
      />
    </>
  );
}
