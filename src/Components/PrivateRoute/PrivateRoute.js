import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { useUser } from '../../Context/UserContext';

export default function PrivateRoute({ children, ...routeProps }) {
  const { user } = useUser();
  return (
    <>
      <p>Private Route</p>
      <Route
        {...routeProps}
        render={({ location }) =>
          user ? children : <Redirect to={{ pathname: '/login', state: { from: location } }} />
        }
      />
    </>
  );
}
